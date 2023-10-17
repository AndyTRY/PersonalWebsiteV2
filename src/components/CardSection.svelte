<script lang="ts">
    import type {BoundaryRelationship, Section } from "src/stores/store";
    import type { Writable } from 'svelte/store';
    import ExpCardCarousel from "./ExpCardDisplays/ExpCardCarousel.svelte";
    import ExpCardList from "./ExpCardDisplays/ExpCardList.svelte";

   

    import {experienceDisplayMode, DisplayMode} from "src/stores/store"

    import { ExperienceType, type ExpCard_T } from 'src/interface/ExpCard';

    export let experienceType: ExperienceType;
    export let cards:ExpCard_T[] = [];
    export let boundaryRelationship: Writable<BoundaryRelationship>;

    function experienceTypeName(experienceType: ExperienceType){
      if (experienceType == ExperienceType.WorkExperience) return "Work Experience"
      if (experienceType == ExperienceType.Project) return "Projects"
    }

  </script>
  




  <div id={experienceTypeName(experienceType)} class="section">
    <div class="section-heading">{experienceTypeName(experienceType)}</div>
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
        background-color: black; /* Change this to adjust the color of the underline */
        
        margin-top: 1em;
        margin-bottom: 4em;
    }

    

    @media (max-width: 1060px) {
        /* Apply styles for screens smaller than 768px wide (phones) */
        .section-heading {
            font-size: 1.5em; /* Adjusted font size for phones */
            text-align: center;
        }

        .underline {
            width: 100%; /* Adjusted width for phones */
        }
    }


  </style>
  