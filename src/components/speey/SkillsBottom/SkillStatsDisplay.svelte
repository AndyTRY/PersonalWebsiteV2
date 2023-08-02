<script lang="ts">
    import { skillMetrics, type skillMetricValues_T } from "src/interface/SkillMetric";

    export let skillName = "Web";
    export let skillMetricValues: skillMetricValues_T = {"Count": 0, "Proficiency": 0}

    import SkillMetric from "./SkillStatsDisplay/SkillMetric.svelte";
    import SkillMetricInfo from "./SkillStatsDisplay/SkillMetricInfo.svelte";
</script>
  
  <div class="skill-stats-display">
    <p class="skill-name">{skillName}</p>


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
        background-color: white;


        width: 200px;
        height: fit-content;

        font-size: xx-large;
        font-weight: 900;
        border-style: solid;
        border-width: 10px;
        border-radius: 10px;

    }

    .skill-name{
        text-align: center;
        padding: 10px 0 10px 0;
        margin: 0;
        
        border-style: solid;
    }

    .skill-metrics{
        display: flex;
        flex-direction: column;
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
        opacity: 0;
    }

    .skill-metric-shell:hover .skill-info{
        opacity: 1;
    }

    .hidden{
        opacity: 0;
    }






  </style>