<!-- StonePillar.svelte -->
<script lang="ts">
    import { afterUpdate } from 'svelte';
  
    export let height = 100; // Initial height of the pillar
  
    let animating = false;
  
    function animatePillar() {
      animating = true;
      height = 200; // New height for the animation
  
      // After 1 second, reset the height to the initial value
      setTimeout(() => {
        height = 100;
        animating = false;
      }, 1000);
    }
  
    // Watch for changes in the 'height' prop and trigger the animation
    // whenever the 'height' prop changes
    afterUpdate(() => {
      if (!animating) {
        animatePillar();
      }
    });
  </script>
  
  <style >
    .pillar {
      width: 50px;
      background-color: gray;
      transition: height 0.5s; /* Add a smooth transition effect */
    }
  </style>
  
  <div class="pillar" style="height: {height}px;"> </div>
  