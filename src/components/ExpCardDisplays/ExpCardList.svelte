<!-- CardList.svelte -->
<script lang="ts">
    import  {type Writable, derived } from 'svelte/store';
    import { onMount } from 'svelte'; 
    import { ExperienceType, type ExpCard_T } from 'src/interface/ExpCard';
	import ExpCard from './ExpCard/ExpCard.svelte';

    import {isKeyboardEnabled,
         isKeyboardVisible, 
         BoundaryRelationship,
         filterMode,
         searchFilterSkills,
         SkillFilterFlagList,
         workExperienceCardScreenStatusS,
         projectCardScreenStatusS,
         


		 FilterMode,

		 Section,

		 screenMode,

		 ScreenMode



  } from "src/stores/store"
  


  export let cards: ExpCard_T[];
  export let experienceType: ExperienceType;
  import {CARD_HEIGHT, INTER_CARD_GAP, SCROLL_OFFSET, SCROLL_DEBOUCE_TIME} from 'src/stores/consts'

  const filteredCards =  derived([filterMode, SkillFilterFlagList],([$filterMode, $SkillFilterFlagList]) => {
    if ($filterMode == FilterMode.All) return cards
    else 
      return cards.filter(card => {
        return card.fields.some(field => $SkillFilterFlagList.includes(field)) ||
               card.tags.some(tag => $SkillFilterFlagList.includes(tag));
        });
    });



  

    export let boundaryRelationship: Writable<BoundaryRelationship>

    let expList: Element;
    let scrollTimeoutTask: NodeJS.Timeout;
    let observer: IntersectionObserver;


    const cardHeight = CARD_HEIGHT;
    const gap = INTER_CARD_GAP;
    const offset = CARD_HEIGHT/4;
    const scrollOffset = SCROLL_OFFSET;

    const topBoundary = gap;
    const bottomBoundary = derived([filteredCards],([$filteredCards]) => {
        return -(offset + Math.max(0,($filteredCards.length-1)) *(cardHeight + gap))
   });
   

    // function scrollIntoViewWithOffset(selector:Element, offset:number) {
    //         window.scrollTo({
    //             behavior: 'smooth',
    //             top:
    //                 selector.getBoundingClientRect().top -
    //                 document.body.getBoundingClientRect().top -
    //                 offset,
    //         })
    // }

    
    // function SnapPosition(position: number){
    //     for (var i = 0; i < $filteredCards.length; i++) 
    //         if (position > - (offset + i *(cardHeight + gap))){
    //             let cardElement:Element = expList.children[i]
    //             scrollIntoViewWithOffset(cardElement, scrollOffset)
    //             return `SNAP TO CARD number ${i}`
    //         }
    // }

    function UpdatePosition(position: number){
        if (position > topBoundary) {
            boundaryRelationship.set(BoundaryRelationship.OutOfBoundsTop)
            return "outOfBoutnds - Top";
        }

        if (position <= $bottomBoundary) {
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


            if (observer) observer.disconnect();
            observeCards();
            







            clearTimeout(scrollTimeoutTask);
            scrollTimeoutTask = setTimeout(() => {
                isKeyboardVisible.set(true)
                // if ($boundaryRelationship == BoundaryRelationship.InBounds && $screenMode == ScreenMode.Normal) 
                //     SnapPosition(expListViewportPoisiton)

            }, SCROLL_DEBOUCE_TIME); 
    }


    // }
    const observeCards = () => {
            observer = new IntersectionObserver(entries => {

                const cardStatusS = experienceType == ExperienceType.WorkExperience ? workExperienceCardScreenStatusS : projectCardScreenStatusS
                const cardStatus = {}
                entries.forEach(entry => {
                    const cardNumber: number = entry.target.cardNumber;

                    // if (entry.isIntersecting) {
                    //     console.log(`Card ${cardNumber} on screen`);
                    // } else {
                    //     console.log(`Card ${cardNumber} off screen`);
                    // }
                    cardStatus[cardNumber] = entry.isIntersecting ? true : false

                });
                cardStatusS.set(cardStatus)
                console.log("")
            });
        
            for (let i = 0; i < expList.children.length; i++) {
                let card = expList.children[i];
                card.cardNumber = i
                observer.observe(card)
            }
        }


    onMount(() => {
        document.addEventListener('scroll', scrollHandler);
        observeCards()
        return () => {              
            document.removeEventListener('scroll', scrollHandler);
            if (scrollTimeoutTask) {clearTimeout(scrollTimeoutTask);}
            if (observer) observer.disconnect();
        };
    });

    // onMount(() => {

        
        
    // });


</script>




  
<div class="exp-card-list" bind:this={expList}>
    {#if $filteredCards.length === 0}
        <div class="placeholder-card">No Matching Experience</div>
    {:else}
        {#each $filteredCards as card, i}
                <ExpCard {card}/>
        {/each}
    {/if}
</div>





<style>
 .exp-card-list {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 80px;
    }


    .placeholder-card {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 25em;
      max-height: 8em;
      background-color: black;
      text-align: center;

      color: white;
      font-size: 3em;
    }
</style>






