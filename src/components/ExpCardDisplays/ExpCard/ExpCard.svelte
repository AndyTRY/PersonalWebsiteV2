<!-- Card.svelte -->
<script lang="ts">
    import type { ExpCard_T } from "src/interface/ExpCard";

    export let card: ExpCard_T;

    import Tag from "./Tag.svelte"
    import DotJotExprienceList from "./DotJotExprienceList.svelte";
    import MediaCarousel from "./MediaCarousel.svelte";

    import 'src/styles/variables.scss';

</script>
  
  <style>
    .card {
      scroll-padding: 0 0 0 0;




      display: flex;
      border: 1px solid black;
      border-radius: 10px;
      padding: 0 0 16px 50px;

      width: 1200px; /* Set the width to your desired value */
      max-width: 100%; /* Control the maximum width of the card */
      box-sizing: border-box; /* Include padding and border in the width calculation */
      height: 25em;

      /* background: linear-gradient(to bottom right, silver, white, white, white);*/
      background-color: var(--main-color);

      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 3px 12px rgba(0, 0, 0, 0.05);  

      position: relative; /* Needed for the pseudo-element */
      overflow: hidden; /* Hide any content that might overflow from the corner effect */
      transform-style: preserve-3d; /* Ensure proper 3D rendering */
    }


    
   .card::before {

    content: "";
    position: absolute;
    top: -30px; 
    left: -30px; 
    width: 200px;
    height: 200px; 
    background: linear-gradient(78deg, rgba(255, 255, 255, 0.8), transparent, transparent);
    border-radius: 50%;
    transform: rotate(51deg);
    pointer-events: none; 
    z-index: -1; 
    backface-visibility: hidden; 
  } 

  
    .left-content {
      /* Create a left content container for the tags, title, description, and DotJotExprienceList */
      flex: 1; /* Let the left content take all available space */
      display: flex;
      flex-direction: column;
      margin-right: 40px; /* Add some margin to separate the image from the left content */

      margin-top: 20px;
   }
  
    .title {
      font-size: 68px;
      font-weight: bold;
      margin-bottom: 8px;
      font-family: "NTR";
      color: black;
    }
  
    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
  
    .description {
      margin-bottom: 16px;
    }

    .right-content {
      /* Create a right content container for the image */
      flex-shrink: 0; /* The image should not shrink and will maintain its width */
      padding-top: 50px;
    }
  
    .image {
      width: 200px;
      height: 200px;
      object-fit: cover;

      border-radius: 4px;
      border-style: solid;
      border-width: thin;
    }

    .description{
      width: 90%;
    }
  </style>
  
  <div class="card">
    <div class="left-content">
      <div class="tags">
        {#each card.tags as tag}
          <Tag text={tag}/>
        {/each}
      </div>

      <div class="title">{card.title}</div>
    
      <div class="description">{card.description}</div>

      <DotJotExprienceList exprList={card.exprList} />
    </div>
  
    <MediaCarousel mediaSources={card.mediaSources}/>
  </div>

