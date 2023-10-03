<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';
  import { onMount } from 'svelte'; 
  import type {Writable } from 'svelte/store';

  import type { ExpCard_T } from 'src/interface/ExpCard';
	import ExpCard from './ExpCard/ExpCard.svelte';
  import {isKeyboardEnabled, isKeyboardVisible, BoundaryRelationship} from "src/stores/store"
  import {CARD_HEIGHT, INTER_CARD_GAP, SCROLL_OFFSET, SCROLL_DEBOUCE_TIME} from 'src/stores/consts'

  export let cards:ExpCard_T[] = [];
  export let boundaryRelationship: Writable<BoundaryRelationship>


    let expCarousel: Element;
    let scrollTimeoutTask: NodeJS.Timeout;

    const topBoundary = INTER_CARD_GAP;
    const bottomBoundary = -(CARD_HEIGHT/4)



    function scrollIntoViewWithOffset(selector:Element, offset:number) {
            window.scrollTo({
                behavior: 'smooth',
                top:
                    selector.getBoundingClientRect().top -
                    document.body.getBoundingClientRect().top -
                    offset,
            })
    }

    function SnapPosition(){
        scrollIntoViewWithOffset(expCarousel, SCROLL_OFFSET)
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

            const expCarouselViewportPoisiton = expCarousel.getBoundingClientRect().top;
            UpdatePosition(expCarouselViewportPoisiton)

            clearTimeout(scrollTimeoutTask);
            scrollTimeoutTask = setTimeout(() => {
                isKeyboardVisible.set(true)
                if ($boundaryRelationship == BoundaryRelationship.InBounds) SnapPosition()

            }, SCROLL_DEBOUCE_TIME); 
    }

    onMount(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
            if (scrollTimeoutTask) {clearTimeout(scrollTimeoutTask);}
        };
    });

  </script>



  <div  class="exp-carousel" bind:this={expCarousel}>
    <Splide options={{ gap: '5em'}}>

      {#each cards as card}
        <SplideSlide>
          <ExpCard {card}/>
        </SplideSlide>
      {/each}

    </Splide>
  </div>

  <style>

    .exp-carousel{
      width: 100%;
    }
  </style>

