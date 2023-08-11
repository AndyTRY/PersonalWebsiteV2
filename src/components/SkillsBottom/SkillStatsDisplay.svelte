<script lang="ts">
    import { skillMetrics, type skillMetricValues_T } from "src/interface/SkillMetric";

    import { hoveredSkill } from 'src/stores/store';

    export let skillMetricValues: skillMetricValues_T = {"Count": 0, "Level": 0}

    import SkillMetric from "./SkillStatsDisplay/SkillMetric.svelte";
    import SkillMetricInfo from "./SkillStatsDisplay/SkillMetricInfo.svelte";

    import { skillCounts } from "src/db/SkillCounts";



    function capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

</script>
  
  <div class="skill-stats-display">
    <p class="skill-name">{capitalizeFirstLetter($hoveredSkill)}</p>
    <hr>

    <div class="skill-metrics">
        {#each skillMetrics as skillMetric}
            <div class="skill-metric-shell">

                <div class="skill-info hidden"> 
                    <SkillMetricInfo {skillMetric}/>
                </div>

                <div class="skill-metric">
                    <SkillMetric skillMetric={skillMetric} skillMetricValue={skillMetricValues[skillMetric]}/>
                </div>
            </div>
        {/each}
    </div>
  </div>
  
  <style lang="scss">
    .skill-stats-display{
        display: flex;
        flex-direction: column;
        max-width: 100%;


        margin-top: 5px;

        width: 200px;
        height: fit-content;

        font-size: xx-large;
        font-weight: 900;

        border-style: solid;

        border-radius: 10px;
        border-color: white;

        background-color: white;
    }



    .skill-name{
        text-align: left;
        padding: 10px 0 18px 20px;
        margin: 0;

        background-color: white;
        
    }

    hr{
        position: relative;
        height: 1px;
        width: 220px;

        margin: 0;
        
        top: -6px;
        left: -12px;
        background-color: black;
        border-style: solid;
    }

    .skill-metrics{
        
        display: flex;
        flex-direction: column;
        background-color: white;

        // border-color: white;
        // border-style: solid;
        // border-width: 5px;


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