<script lang="ts">
    export let name:string;

    const sectionNames  = ["Work Experience", "Projects"]
  </script>
  
  <div class="site-heading">
    <div class="title">{name}</div>
    <div class="sections">
      {#each sectionNames as sectionName}
        <a href="#{sectionName}" class="section-name">{sectionName}</a>
      {/each}
    </div>
  </div>

<!-- 
<div class="underline"></div> -->

  <style lang="scss">

    .site-heading{
      display: flex;
      flex-direction: row;
      color: white;
      width: 70%;
      margin-bottom: 5em;
    }

    .title {
      font-size: 5em;
      font-weight: bold;
      color: white;

      margin-top: 0.4em;
      margin-right: 1em;
      /* Add any other styles you want for the title heading */

      
    }

    .sections{
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: 2em;

      position: relative;
      bottom: 14px;

      .section-name{
        color: white;
        font-size: x-large;
        white-space: nowrap;
      }
    }

    

    .underline {
        position: relative;
        bottom: 0;
        left: 0;
        width: 70%;
        height: 2px;
        background-color: white; /* Change this to adjust the color of the underline */
        
        margin-top: 1em;
        margin-bottom: 4em;
    }
  </style>