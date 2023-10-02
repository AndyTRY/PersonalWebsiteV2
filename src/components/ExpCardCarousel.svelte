<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';

  import type { ExpCard_T } from 'src/interface/ExpCard';
	import ExpCard from './ExpCardCarousel/ExpCard.svelte';

  export let cards:ExpCard_T[] = [];

  </script>
  <div  class="exp-carousel">
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

