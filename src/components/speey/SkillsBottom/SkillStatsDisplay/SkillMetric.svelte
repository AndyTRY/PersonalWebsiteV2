<script lang="ts">

    export let skillMetric = "Count";
    export let skillMetricValue = 0;
</script>


    <div class="skill-metric skill-{skillMetric.toLowerCase()}">
        <img src="src/assets/otherIcons/skill{skillMetric}.svg"  alt={skillMetric}>
        <div class="skill-metric-value">{skillMetricValue}</div>
    </div>



  
  <style lang="scss">


    %box {
        display: flex;
        flex-direction: row; 
        border-style: solid;
        padding: 10px;
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





  </style>