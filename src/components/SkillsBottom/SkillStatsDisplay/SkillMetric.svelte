<script lang="ts">

	import {hoveredSkillCount } from "src/stores/store";
    export let skillMetric = "Count";

</script>

    <div class="skill-metric skill-{skillMetric.toLowerCase()}">
        <img src="src/assets/otherIcons/skill{skillMetric}.svg"  alt={skillMetric}>
        <div class="skill-metric-value">{$hoveredSkillCount}</div>
    </div>
  
<style lang="scss">


    %box {
        display: flex;
        flex-direction: row; 
        
        padding: 10px 10px 10px 20px;

        height: 50px
        
    }

    .skill-metric{
        @extend %box;
        
    }

    .skill-metric-value{
        flex: 1;
        text-align: center;
    }

    img {
        width: 40px;
        height: 40px;
    }




  </style>