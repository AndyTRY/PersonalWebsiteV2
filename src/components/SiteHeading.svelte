<script lang="ts">
    export let name:string;

    const sectionNames  = ["Work Experience", "Projects"]

    function scrollToSection(sectionName:string) {
        const section = document.getElementById(sectionName);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

  </script>
  
  <div class="site-heading">
    <div class="title">{name}</div>
    <div class="sections">
      {#each sectionNames as sectionName}
          <a href="javascript:void(0);" class="section-name" on:click={() => scrollToSection(sectionName)}>{sectionName}</a>
      {/each}
    </div>
  </div>


  <style lang="scss">

    .site-heading{
      margin-top: 3em;
      margin-bottom: 5em;

      display: flex;
      flex-direction: row;
      gap: 5em;
      color: white;
      width: 100%;
    }

    .title {
      font-size: 5em;
      font-weight: bold;
      color: white;

      
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

    @media (max-width: 1060px) {
        /* Apply styles for screens smaller than 768px wide (phones) */
        .site-heading {
            flex-direction: column; /* Stack items on top of each other */
            align-items: center; /* Center items horizontally */
            text-align: center; /* Center text */
        }

        .title {
            font-size: 3em; /* Adjusted font size */
        }

        .sections {
            flex-direction: column; /* Stack items on top of each other */
            align-items: center;
            gap: 1em; /* Reduced gap between section names */
        }

        .section-name {
            font-size: large; /* Adjusted font size */
        }
    }



  
  </style>