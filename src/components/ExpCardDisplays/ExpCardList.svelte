<!-- CardList.svelte -->
<script lang="ts">
    import type {Writable } from 'svelte/store';
    import { onMount } from 'svelte'; 
    import type { ExpCard_T } from 'src/interface/ExpCard';
	import ExpCard from './ExpCard/ExpCard.svelte';

    import {isKeyboardEnabled, isKeyboardVisible, BoundaryRelationship} from "src/stores/store"
    import {CARD_HEIGHT, INTER_CARD_GAP, SCROLL_OFFSET, SCROLL_DEBOUCE_TIME} from 'src/stores/consts'

    export let cards:ExpCard_T[] = [];
    export let boundaryRelationship: Writable<BoundaryRelationship>

    let expList: Element;
    let scrollTimeoutTask: NodeJS.Timeout;


    const cardHeight = CARD_HEIGHT;
    const gap = INTER_CARD_GAP;
    const offset = CARD_HEIGHT/4;
    const scrollOffset = SCROLL_OFFSET;

    const topBoundary = gap;
    const bottomBoundary = -(offset + (cards.length-1) *(cardHeight + gap))


    function scrollIntoViewWithOffset(selector:Element, offset:number) {
            window.scrollTo({
                behavior: 'smooth',
                top:
                    selector.getBoundingClientRect().top -
                    document.body.getBoundingClientRect().top -
                    offset,
            })
    }

    
    function SnapPosition(position: number){
        for (var i = 0; i < cards.length; i++) 
            if (position > - (offset + i *(cardHeight + gap))){
                let cardElement:Element = expList.children[i]
                scrollIntoViewWithOffset(cardElement, scrollOffset)
                return `SNAP TO CARD number ${i}`
            }
    }

    function UpdatePosition(position: number){
        if (position > topBoundary) {
            boundaryRelationship.set(BoundaryRelationship.OutOfBoundsTop)
            return "outOfBoutnds - Top";
        }

        if (position <= bottomBoundary) {
            boundaryRelationship.set(BoundaryRelationship.OutOfBoundsBottom)
            return "outOfBoutnds - Bottom"
        }

        else  boundaryRelationship.set(BoundaryRelationship.InBounds)
        return

    }

    function scrollHandler() { 
            isKeyboardVisible.set(false);

            const expListViewportPoisiton = expList.getBoundingClientRect().top;
            UpdatePosition(expListViewportPoisiton)

            clearTimeout(scrollTimeoutTask);
            scrollTimeoutTask = setTimeout(() => {
                isKeyboardVisible.set(true)
                if ($boundaryRelationship == BoundaryRelationship.InBounds) SnapPosition(expListViewportPoisiton)

            }, SCROLL_DEBOUCE_TIME); 
    }


    // }



    onMount(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
            if (scrollTimeoutTask) {clearTimeout(scrollTimeoutTask);}
        };
    });


</script>




  
<div class="exp-card-list" bind:this={expList}>

        {#each cards as card, i}
                <ExpCard {card}/>
        {/each}
</div>





<style>
 .exp-card-list {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 80px;
    }
</style>






