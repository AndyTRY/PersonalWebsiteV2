<!-- Tag.svelte -->
<script lang="ts">
    export let tag = '';
    export let type = '';
    export let isFiltered = 0;
    import {skillCategory} from "src/db/SkillCategories"
	import { FilterMode, filterMode } from "src/stores/store";
    import { mappedName } from "src/stores/utils";
	  import { onMount } from "svelte";




    let iconPath = `src/assets/${type}Icons/${mappedName(tag)}.svg`

    $: {
      iconPath = `src/assets/${type}Icons/${mappedName(tag)}.svg`
    }

    // let pathExistsPromise: Promise<boolean>;
    // onMount(()=>{
    //     pathExistsPromise = fetch(iconPath).then(response => {return response.ok ? true:false;});
	  // })

    function includeName(tag: string){
        return ! ([""].includes(tag))
    }

    function includeIcon(tag: string){
        return ! ([
                  // Poor Quality
                  "C",
                  "Compiler", 
                  "Neo4j",
                   "Assembly", 
                   "Unix", 
                   "STATA",
                   "Oauth2",
                

                   // No SVG
                  "CronJob",
                  "Maven",
                  "Terminal",
                  "Cuda",
                  "PThreads",
                  "OMP",
                  "SciNet",
                  "3D Printing",
                  "CNC Routing",
                  ".NET",
                  "MARS"
                  ].includes(tag))
    }



    

</script>

<style lang="scss">
  .tag {
    display: flex;
    flex-direction: row;

    gap: 2px;

    font-size: 10px;
    padding: 4px 8px;
    margin-right: 6px;
    font-weight: bold;

    border-radius: 15px;
    border-style: solid;
    border-width: thin;
    border-color: black;

    align-items: center;

    background-color: var(--main-color-darken);
  }

  .icon{
    width: 20px;
    height: 20px;
  }

  .highlight{

    .icon{
      filter: invert(100%);
    }
    .tag-name{
      filter: invert(100%);
    }
  }


</style>

<div class="tag {isFiltered == 1 && $filterMode != FilterMode.All ? 'highlight': ''}">
    <!-- {#await pathExistsPromise}
      <div>loading</div>
    {:then pathExists}
      {#if pathExists && includeIcon(tag)}
        <img class="icon" src="src/assets/{type}Icons/{mappedName(tag)}.svg"  alt="0">
      {/if}
    {/await} -->

  {#if includeIcon(tag)}
    <img class="icon" src="{iconPath}"  alt="0">
  {/if}


  {#if includeName(tag)}
    <div class="tag-name">{tag}</div>
  {/if}

</div>