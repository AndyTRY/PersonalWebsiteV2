<script lang="ts">
    export let skillMetric = "";

    import HoverShow from "src/components/utils/HoverShow.svelte";
    import SkillMetricInfoHelp from "./SkillMetricInfoHelp.svelte";
	import SkillMetric from "./SkillMetric.svelte";
</script>
  

    <div class="skill-info"> 
        <HoverShow>
            <img slot="hover-element" src="src/assets/otherIcons/info.svg"  alt="info">
            <SkillMetricInfoHelp slot="hover-show-element" {skillMetric}/>
        </HoverShow>
        
            <div class="skill-info-text">{skillMetric}</div>

    </div>

  
  <style lang="scss">



    %box {
        display: flex;
        flex-direction: row; 

        padding: 10px 10px 10px 15px;

        transition: opacity 0.3s ease;
    }

    img {
        width: 40px;
        height: 40px;
    }

    .skill-info{
        @extend %box;
        height: 40px;
        width: 170px;

        gap: 10px;
    }

  </style>