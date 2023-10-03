<script lang="ts">
    import type {BoundaryRelationship } from "src/stores/store";
    import type { Writable } from 'svelte/store';
    import ExpCardCarousel from "./ExpCardDisplays/ExpCardCarousel.svelte";
    import ExpCardList from "./ExpCardDisplays/ExpCardList.svelte";

   

    import {experienceDisplayMode, DisplayMode} from "src/stores/store"

    import type { ExpCard_T } from 'src/interface/ExpCard';

    export let sectionTitle = "";
    export let cards:ExpCard_T[] = [];
    export let boundaryRelationship: Writable<BoundaryRelationship>;



  </script>
  




  <div id={sectionTitle} class="section">
    <div class="section-heading">{sectionTitle}</div>
    <div class="underline"></div>


    {#if $experienceDisplayMode === DisplayMode.List}
      <ExpCardList {cards} {boundaryRelationship} />
    {:else if $experienceDisplayMode === DisplayMode.Carousel}
      <ExpCardCarousel {cards} {boundaryRelationship} />
    {/if}
  </div>




  <style>

    .section{
        width: 100%;
    }

    .section{
        display: flex;
        flex-direction: column;
    }

    .section-heading{
        color: white;
        font-size: 3.5em;
    }

    .underline {
        position: relative;
        bottom: 0;
        left: 0;
        width: 70%;
        height: 2px;
        background-color: white; /* Change this to adjust the color of the underline */
        
        margin-top: 1em;
        margin-bottom: 4em;
    }


  </style>
  