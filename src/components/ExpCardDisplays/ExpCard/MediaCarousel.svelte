<script lang="ts">
    import { onMount } from 'svelte';
    import type { Image, Video, SketchFabModel, Media } from "src/interface/MediaTypes";
    import { MediaType } from "src/interface/MediaTypes";
    import 'src/styles/variables.scss'
	import {isFoucsedImage, focusImageUrl} from 'src/stores/store'
    export let mediaSources:Media[] = []


    // Needs Improvement - 2
    // Current order shown: Images, SketchFabModels, Videos
    let images: Image[] = []
    let sketchFabModels: SketchFabModel[] = []
    let videos: Video[] = []


    let captionDisplayer: Element;

    $: {
        images = mediaSources.filter(mediaSource => mediaSource.type === MediaType.Image) as Image[];
        sketchFabModels = mediaSources.filter(mediaSource => mediaSource.type === MediaType.SketchFabModel) as SketchFabModel[];
        videos = mediaSources.filter(mediaSource => mediaSource.type === MediaType.Video) as Video[];
    }


    let curImageIndex = 0;
    let ZIndexTransitionSpeed = 0;

    const depthOffset = -40;
    const blurIntensityImg2 = 2;
    const blurIntensityImg3 = 5;





  
    function viewNextImg() {
        curImageIndex += 1;
        ZIndexTransitionSpeed = 1;
    }

    function viewPrevImg() {
        curImageIndex -= 1;
        ZIndexTransitionSpeed = 0;
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

    function Index2 (index: number) {
        return index + images.length
    }

    function Index3 (index: number) {
        return index + images.length + sketchFabModels.length
    }

    function toggleExpansion(imageUrl:string) {
        isFoucsedImage.set(!$isFoucsedImage)
        focusImageUrl.set(imageUrl)
    }

  </script>
  
  <div class="container"

  >

    {#each images as image, index}
            <img class="image" src="{image.imageUrl}" alt="" on:click="{toggleExpansion(image.imageUrl)}"
                 style="transform: translate3d({-((index - curImageIndex) * depthOffset)}px, 
                                            {(index - curImageIndex) * depthOffset}px, 
                                            {(index - curImageIndex) * depthOffset}px);
                        z-index: {-Math.abs(index - curImageIndex)};
                        opacity: {determineOpacity(index, curImageIndex)};
                        filter:  blur({determineBlur(index, curImageIndex)}px);
                        transition: transform 0.9s ease, opacity 0.5s, z-index {ZIndexTransitionSpeed}s;"
            />
    {/each}


  {#each sketchFabModels as sketchFabModel, index}
    <div class="sketchfab-model" 
         style="transform: translate3d({-((Index2(index) - curImageIndex) * depthOffset)}px, 
                                        {(Index2(index) - curImageIndex) * depthOffset}px, 
                                        {(Index2(index) - curImageIndex) * depthOffset}px);
                z-index: {-Math.abs(Index2(index) - curImageIndex)};
                opacity: {determineOpacity(Index2(index), curImageIndex)};
                filter:  blur({determineBlur(Index2(index), curImageIndex)}px);
                transition: transform 0.9s ease, opacity 0.5s, z-index {ZIndexTransitionSpeed}s;"
    >
        {@html sketchFabModel.embedHTML}
    </div>
  {/each}


  {#each videos as video, index}
    <video controls muted
           style="transform: translate3d({-((Index3(index) - curImageIndex) * depthOffset)}px, 
                                        {(Index3(index) - curImageIndex) * depthOffset}px, 
                                        {(Index3(index) - curImageIndex) * depthOffset}px);
                                    z-index: {-Math.abs(Index3(index) - curImageIndex)};
                                    opacity: {determineOpacity(Index3(index), curImageIndex)};
                                    filter:  blur({determineBlur(Index3(index), curImageIndex)}px);
                                    transition: transform 0.9s ease, opacity 0.5s, z-index {ZIndexTransitionSpeed}s;"
    >
        <source src={video.videoUrl} type="video/{video.mimeType}" />
        Your browser does not support the video tag.
    </video>
  {/each}







    <button class="btn btn-left"  on:click={viewPrevImg} style="display: {curImageIndex === 0                      ? 'none' : 'block'};"></button>
    <button class="btn btn-right" on:click={viewNextImg} style="display: {curImageIndex >= mediaSources.length - 1 ? 'none' : 'block'};"></button>

    <div class="media-caption" bind:this={captionDisplayer}>
        {mediaSources[curImageIndex]?.caption ?? ""}
    </div>

  </div>
  

  
  <style lang="scss">
    .container {
      position: relative;
      width: 300px;
      height: 300px;
      
      perspective: 1000px;
      /* border-style: solid; */

      overflow: hidden;
      transform-style: preserve-3d; /* Allow negative Z elements to be visible */

      padding-top: 10px;
      margin-right: 30px;
      padding-right: 30px;
    }

    .media-caption{
        position: absolute;
        right: 118px;
        bottom: -37px;

        height: 70px;
        width: 159px;
        font-style: italic;
        font-size: 13px;
        text-align: center;
    }
    















    .btn-left{
        background-image: url("src/assets/otherIcons/leftArrow.svg");

        right: 70px;
        bottom: 56px;
    }

    .btn-right{
        background-image: url("src/assets/otherIcons/rightArrow.svg");

        right: 43px;
        bottom: 56px;
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


    %mediaStyle {
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
    }
  
    .image {
        @extend %mediaStyle
    }

    .sketchfab-model{
        @extend %mediaStyle
    }

    video {
        @extend %mediaStyle
    }
  
  </style>
  