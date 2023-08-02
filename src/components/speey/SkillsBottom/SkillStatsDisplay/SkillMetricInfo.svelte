<script lang="ts">
    export let skillMetric = "Count";
</script>
  

    <div class="skill-info"> 
        <img src="src/assets/otherIcons/info.svg"  alt="info">
        <div class="skill-info-text">{skillMetric}</div>
    </div>

  
  <style lang="scss">

    %box {
        display: flex;
        flex-direction: row; 
        border-style: solid;
        padding: 10px;
        transition: opacity 0.3s ease;
    }

    img {
        width: 40px;
        height: 40px;
    }

    .skill-info{
        @extend %box;
        height: 40px;
        width: 175.2px;
    }

  </style>