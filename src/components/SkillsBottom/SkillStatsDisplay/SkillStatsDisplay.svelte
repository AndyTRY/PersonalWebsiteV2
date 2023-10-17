<script lang="ts">
    import { skillMetrics, type skillMetricValues_T } from "src/interface/SkillMetric";

    import { hoveredSkill } from 'src/stores/store';

    export let skillMetricValues: skillMetricValues_T = {"Count": 0}

    import SkillMetric from "./SkillMetric.svelte";
    import SkillMetricInfo from "./SkillMetricInfo.svelte";

    import { skillCounts } from "src/db/SkillCounts";

    import 'src/styles/variables.scss'



    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

</script>
  
  <div class="skill-stats-display">
    <div class="skill-name">{capitalizeFirstLetter($hoveredSkill)}</div>
    

    <div class="skill-metrics">
        {#each skillMetrics as skillMetric}
            <div class="skill-metric-shell">

                <div class="skill-info hidden"> 
                    <SkillMetricInfo {skillMetric}/>
                </div>

                <div class="skill-metric">
                    <SkillMetric skillMetric={skillMetric}/>
                </div>
            </div>
        {/each}
    </div>
  </div>
  
  <style lang="scss">
    .skill-stats-display{
        display: flex;
        flex-direction: column;

        width: 100%;
        

        height: fit-content;

        font-size: xx-large;
        font-weight: 900;

        border-radius: 10px;
        border-color: var(--main-color);;

        background-color: var(--main-color);
        overflow: hidden;

    }

    



    .skill-name{
        text-align: left;
        padding: 10px 0 18px 20px;
        margin: 0;

        min-width: 10em; /* Set a minimum width as 100% */
        max-width: 5em; /* Set a maximum width as 100% */
        width: 100%; /* Set the width to always be 100% */

        overflow: hidden;
        white-space: nowrap; 
        text-overflow: ellipsis; /* Truncate with ellipsis if needed */

        border-bottom: 2px solid black; /* Add this line */
        
    }

    .skill-metrics{
        
        display: flex;
        flex-direction: column;
        background-color: var(--main-color);
    }

    %transition-property {
        transition: opacity 0.3s ease;
    
    }
    

    .skill-metric{
        @extend %transition-property;
    }

    .skill-info{
        @extend %transition-property;
        position: absolute;
    }

    .skill-metric-shell:hover .skill-metric{
        visibility: hidden;
        opacity: 0;
    }

    .skill-metric-shell:hover .skill-info{
        opacity: 1;
    }

    .hidden{
        opacity: 0;
    }






  </style>