<script>
    let depthOffScreen = 180;
    let depthDist1 = 0; // Depth value for the 1st element
    let depthDist2 = -50; // Depth value for 2nd element
    let depthDist3 = -100; // Depth value for 3rd element
  
    function translateForward() {
      depthDist2 = 0; // Change the translation value to move Div B forward
      depthDist3 = -50;
      depthDist1 = 180; // Move Div A out of the container and beyond
    }
  </script>
  
  <div class="container">
    <div class="divC" style="transform: translate3d({-depthDist3}px, {depthDist3}px, {depthDist3}px);">Some Text C</div>
    <div class="divB" style="transform: translate3d({-depthDist2}px, {depthDist2}px, {depthDist2}px);">Some text B</div>
    <div class="divA" style="transform: translate3d({-depthDist1}px, {depthDist1}px, {depthDist1}px);">Some Text A</div>
  </div>
  
  <button on:click={translateForward}>Translate Forward</button>
  
  <style>
    .container {
      position: relative;
      width: 400px;
      height: 400px;
      perspective: 1000px;
      border-style: solid;
      overflow: hidden;
      transform-style: preserve-3d; /* Allow negative Z elements to be visible */
    }
  
    .divA,
    .divB,
    .divC {
      background-color: white;
      position: absolute;
      width: 200px;
      height: 200px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

      bottom: 0;
      left: 0;
      transition: transform 0.9s ease;
    }
  
  </style>
  