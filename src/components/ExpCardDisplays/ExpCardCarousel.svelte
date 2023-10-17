<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';
  import { onMount } from 'svelte'; 
  import {derived, type Writable} from 'svelte/store';

  import type { ExpCard_T } from 'src/interface/ExpCard';
	import ExpCard from './ExpCard/ExpCard.svelte';
  import {isKeyboardEnabled,
         isKeyboardVisible, 
         BoundaryRelationship,
         filterMode,
         searchFilterSkills,
         SkillFilterFlagList,

		     FilterMode,

			 screenMode,

			 ScreenMode


  } from "src/stores/store"
  
  export let cards: ExpCard_T[];
  import {CARD_HEIGHT, INTER_CARD_GAP, SCROLL_OFFSET, SCROLL_DEBOUCE_TIME} from 'src/stores/consts'


  let filteredCards =  derived([filterMode, SkillFilterFlagList],([$filterMode, $SkillFilterFlagList]) => {
    if ($filterMode == FilterMode.All) return cards
    else {
      const filtered = cards.filter(card => {
        return card.fields.some(field => $SkillFilterFlagList.includes(field)) ||
               card.tags.some(tag => $SkillFilterFlagList.includes(tag));
        });
      return filtered
    }
      
});




  

  
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
                // if ($boundaryRelationship == BoundaryRelationship.InBounds && $screenMode == ScreenMode.Normal) 
                //     SnapPosition()

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




  <div class="exp-carousel" bind:this={expCarousel}>
    {#if $filteredCards.length === 0}
      <div class="placeholder-card">No Matching Experience</div>
    {:else}

      <Splide options={{ gap: '5em'}}>
        {#each $filteredCards as card}
          <SplideSlide>
            <ExpCard {card}/>
          </SplideSlide>
        {/each}
      </Splide>
    {/if}


  </div>

  <style>

    .exp-carousel{
      width: 100%;
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

