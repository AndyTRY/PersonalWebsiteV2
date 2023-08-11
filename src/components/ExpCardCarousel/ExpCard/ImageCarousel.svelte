<script lang="ts">
    export let imgSrces:string[] = []



    let curImageIndex = 0;
    const depthOffset = -40;
    const blurIntensityImg2 = 2;
    const blurIntensityImg3 = 5;


    let isDragging = false;
    let startX: number | null = null;

  
    function viewNextImg() {
        curImageIndex += 1;
    }

    function viewPrevImg() {
        curImageIndex -= 1;
    }


    function handleDragStart(event: MouseEvent) {
        isDragging = true;
        startX = event.clientX;
    }

    function handleDragMove(event: MouseEvent) {
        if (!isDragging) return;
        const offsetX = event.clientX - (startX || 0);
        if (offsetX > 20) {
            viewPrevImg();
            startX = event.clientX;
        } else if (offsetX < -20) {
            viewNextImg();
            startX = event.clientX;
        }
    }

    function handleDragEnd() {
        isDragging = false;
        startX = null;
    }

    
    function determineOpacity(index: number, curImageIndex: number){
        // Only the current image alongside the next 2 should shown
        if (index < curImageIndex)  return 0
        if (index > curImageIndex + 2) return 0


        return 1 
    }

    function determineBlur(index: number, curImageIndex: number){
        // Of the 3 images shown, 2nd blurred, 3rd more blurred
        if (index == curImageIndex + 1) return blurIntensityImg2
        if (index >= curImageIndex + 2) return blurIntensityImg3


        return 0
    }
  </script>
  
  <div class="container"

  >

    {#each imgSrces as imgSrc, index}
        <img class="image" src="{imgSrc}" alt=" " 
             style="transform: translate3d({-((index - curImageIndex) * depthOffset)}px, 
                                           {(index - curImageIndex) * depthOffset}px, 
                                           {(index - curImageIndex) * depthOffset}px);
                    z-index: {-index};
                    opacity: {determineOpacity(index, curImageIndex)};
                    filter:  blur({determineBlur(index, curImageIndex)}px)"/>
    {/each}



    <button class="btn btn-left" on:click={viewPrevImg}></button>
    <button class="btn btn-right" on:click={viewNextImg}></button>
  </div>
  

  
  <style>

    .btn-left{
        background-image: url("src/assets/otherIcons/leftArrow.svg");

        right: 75px;
        bottom: 30px;
    }

    .btn-right{
        background-image: url("src/assets/otherIcons/rightArrow.svg");

        right: 75px;
        bottom: 57px;
    }
    button {
        position: absolute;
        width: 24px;
        height: 24px;
        background-position: center;
        background-size: contain; /* Use contain to preserve aspect ratio */
        background-repeat: no-repeat;
        background-color: white;
        border-radius: 8px;

    }




    .container {
      position: relative;
      width: 300px;
      height: 300px;
      
      perspective: 1000px;
      /* border-style: solid; */

      overflow: hidden;
      transform-style: preserve-3d; /* Allow negative Z elements to be visible */
      background-color: white;

      padding-top: 10px;
      margin-right: 30px;
      padding-right: 30px;
    }
  
    img {
      width: 175px;
      height: 175px;
      object-fit: cover;

      border-radius: 4px;
      border-style: solid;
      border-width: thin;

      position: absolute;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

      bottom: 50px;
      left: 45px;
      transition: transform 0.9s ease, opacity 0.5s;
    }
  
  </style>
  