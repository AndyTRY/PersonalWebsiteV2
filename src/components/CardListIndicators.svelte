<script>

    import { workExperienceCardScreenStatusS, projectCardScreenStatusS, sectionState } from "src/stores/store";
    function handleClick() {
        console.log("WORK", $workExperienceCardScreenStatusS);
        console.log("PROJ", $projectCardScreenStatusS);

        console.log($projectCardScreenStatusS[4] && $projectCardScreenStatusS[4+1] === false)
        // console.log($projectCardScreenStatusS[3], $projectCardScreenStatusS[3-1])
    }

  </script>
  
  <div class="dots" on:click="{() => handleClick()}">
    {#if $sectionState == "WRK"}
        {#each Object.keys($workExperienceCardScreenStatusS) as i}
            <div class="dot {i} {$workExperienceCardScreenStatusS[i] ? 'active': ''} 
                            {$workExperienceCardScreenStatusS[i] && $workExperienceCardScreenStatusS[i-1] === false? 'first-active': ''}
                            {$workExperienceCardScreenStatusS[i] == false && $workExperienceCardScreenStatusS[i-1]? 'last-active': ''}"></div>
        {/each}
    {/if}

    {#if $sectionState == "PRO"}
        {#each Object.keys($projectCardScreenStatusS) as i}
            <div class="dot {i} {$projectCardScreenStatusS[i] ? 'active': ''}
                            {$projectCardScreenStatusS[i] && $projectCardScreenStatusS[i-1]== false? 'first-active': ''} 
                            {$projectCardScreenStatusS[i] == false && $projectCardScreenStatusS[i-1]? 'last-active': ''}
                            "></div>
        {/each}
    {/if}
  </div>

  
  <style>
    .dots {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 8px;
      cursor: pointer;

      gap: 5px;
      
    }
  
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgb(167, 166, 166);

      border-style: solid;

      transition: transform 0.2s cubic-bezier(0.42, 0, 0.58, 1); /* Use cubic bezier for smooth transition */
    }
  
    .active {
      transform: scale(1.2); 
      background-color: white;

    }

    .first-active {
        margin-top: 15px;
    }

    .last-active {
        margin-top: 15px;
    }
  </style>