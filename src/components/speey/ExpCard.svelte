<!-- Card.svelte -->
<script lang="ts">
    export let title = '';
    export let tags: string[] = [];
    export let description = '';
    export let imgSrc = '';
    export let exprList: string[] = [];

    import Tag from "src/components/speey/Tag.svelte"
    import DotJotExprienceList from "./DotJotExprienceList.svelte";
</script>
  
  <style>
    .card {
      display: flex;
      border: 1px solid black;
      border-radius: 8px;
      padding: 20px 60px 16px 50px;
      margin: 8px;

      width: 100%; /* Set the width to your desired value */
      max-width: 100%; /* Control the maximum width of the card */
      box-sizing: border-box; /* Include padding and border in the width calculation */

      background: linear-gradient(to bottom right, transparent, transparent, transparent);/* Background gradient */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 3px 12px rgba(0, 0, 0, 0.05);  

      position: relative; /* Needed for the pseudo-element */
      overflow: hidden; /* Hide any content that might overflow from the corner effect */
      transform-style: preserve-3d; /* Ensure proper 3D rendering */
    }

    .card::before {
    /* Pseudo-element to create the shiny corner effect */
    content: "";
    position: absolute;
    top: -30px; /* Use fixed value for position */
    left: -30px; /* Use fixed value for position */
    width: 200px; /* Use fixed value for size */
    height: 200px; /* Use fixed value for size */
    background: linear-gradient(78deg, rgba(255, 255, 255, 0.8), transparent, transparent);
    border-radius: 50%;
    transform: rotate(51deg);
    pointer-events: none; /* Allows interactions with elements beneath the pseudo-element */
    z-index: -1; /* Pushes the pseudo-element behind the card content */
    backface-visibility: hidden; /* Hide the backface to prevent distortion */
  }

    .left-content {
      /* Create a left content container for the tags, title, description, and DotJotExprienceList */
      flex: 1; /* Let the left content take all available space */
      display: flex;
      flex-direction: column;
      margin-right: 40px; /* Add some margin to separate the image from the left content */
   }
  
    .title {
      font-size: 70px;
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
  </style>
  
  <div class="card">
    <div class="left-content">
      <div class="tags">
        {#each tags as tag}
          <Tag text={tag}/>
        {/each}
      </div>

      <div class="title">{title}</div>
    
      <div class="description">{description}</div>

      <DotJotExprienceList exprList={exprList} />
    </div>
  
    {#if imgSrc}
    <div class="right-content">
      <!-- Image -->
      <img class="image" src="{imgSrc}" alt="{title}" />
    </div>
  {/if}
  </div>

