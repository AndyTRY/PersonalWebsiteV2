<script lang="ts">
    import { skillMetrics, type skillMetricValues_T } from "src/interface/SkillMetric";

    export let skillName = "Web";
    export let skillMetricValues: skillMetricValues_T = {"Count": 0, "Proficiency": 0}
</script>
  
  <div class="skill-stats-display">
    <p class="skill-name">{skillName}</p>


    <div class="skill-metrics">
        {#each skillMetrics as skillMetric}
        <div class="skill-metric-shell">

            <div class="skill-info hidden"> 
                <div class="skill-info-text">{skillMetric}</div>
            </div>

            <div class="skill-metric skill-{skillMetric.toLowerCase()}">
                <img src="src/assets/otherIcons/skill{skillMetric}.svg"  alt={skillMetric}>
                <div class="skill-metric-value">{skillMetricValues[skillMetric]}</div>
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

        /* border-style: solid; */
        /* gap: 10px; */
    }

    .skill-metric-shell:hover .skill-metric{
        opacity: 0;
    }

    .skill-metric-shell:hover .skill-info{
        opacity: 1;
    }

    %box {
        display: flex;
        flex-direction: row; 
        border-style: solid;
        padding: 10px;
        transition: opacity 0.3s ease;
    }

    .skill-metric{
        @extend %box;
    }

    .skill-metric-value{
        text-align: center;
        width: 160px;
    }

    img {
        width: 40px;
        height: 40px;
    }

    .skill-info{
        @extend %box;
        position: absolute;
        height: 40px;
        width: 175.2px;
    }


    .hidden{
        opacity: 0;
    }






  </style>