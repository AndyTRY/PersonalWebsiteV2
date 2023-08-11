<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';

  import type { ExpCard_T } from 'src/interface/ExpCard';
	import ExpCard from './ExpCardCarousel/ExpCard.svelte';

  export let cards:ExpCard_T[] = [];

  </script>
  <div  class="exp-carousel">
  <Splide options={{ 
    // rewind: true,
    // padding: '5%',
    gap: '5em',
    // width: '100%',
    // height: '25em',
    // autoWidth: true,



    
    
    }}
   >

    {#each cards as card}
      <SplideSlide>
        <ExpCard {card}/>
      </SplideSlide>
    {/each}



    </Splide>
  </div>

  <style>

    .exp-carousel{
      width: 70%;
      padding: 5em 5em 0 5em;
      border-style: solid;
      border-color: black;
      border-width: thick;
      border-radius: 1em;

      background: black/* Background gradient */
    }
  </style>

