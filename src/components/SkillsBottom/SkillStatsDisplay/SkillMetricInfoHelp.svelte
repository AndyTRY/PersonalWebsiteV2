<script lang="ts">
    export let skillMetric = "Count";

    import HoverShow from "src/components/utils/HoverShow.svelte";

    import { skillMetricHelpInfo } from "src/db/SkillMetricHelpInfo";

</script>
  
    <div class="info">
        <img src="src/assets/otherIcons/skill{skillMetric}.svg"  alt="skillCount">

        <div class="heading-text">{skillMetric}</div>
        
        <hr>

        <div class="info-text">
            {skillMetricHelpInfo[skillMetric]}
        </div>

    </div>

  
  <style lang="scss">
    .info{
        width: 200px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        border-style: solid;

        font-size: 32px;
        z-index: -1;
    }

    hr{
        height: 1px;
        width: 200px;
        align-self: center;

        margin:0;
        background-color: black;
        border-style: solid;

        margin: 2px 0 10px 0;
    }

    img {
        position: absolute;
        width: 30px;
        height: 30px;
        left: 23px;
        top: 15px;
    }

    

    .heading-text{
        top: 5px;
        align-self: center;
    }


    .info-text{
        font-weight: 100;
        font-size: medium;
        align-self: center;
        width: 180px
    }


  </style>