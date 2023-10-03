<script lang="ts">
  import { onMount } from 'svelte';
    export let exprList: string[] = [];
    import { keywords } from "src/db/Keywords";

    let boldedSplitExprList: string[][]

    onMount(() => {
      boldedSplitExprList = exprList.map(expr => getBoldedSplitArrays(expr, keywords));
    });

    // Can potentially move to another file. Although only used here at the moment.
    // DataStruct - BoldedSplitArray: Every 2nd element in the array is a keyword. Flattening the array gives you the original string
    function getBoldedSplitArrays(str: string, keywords: string[]) {
      const boldedSplitArray = [];
      const splitStr = str.split(' ');

      let curString = ""
      for (let i = 0; i < splitStr.length; i++) {
        const word = splitStr[i];

        if (keywords.includes(word.replace(/,*$/, "").toLocaleLowerCase())){
            boldedSplitArray.push(curString)
            boldedSplitArray.push(word.replace(/,*$/, ""))
            curString = word.endsWith("," ) ? ", " : ""
        } else 
          curString = curString == "" ? word : `${curString} ${word}`
        
      }

      boldedSplitArray.push(curString)
      return boldedSplitArray
    }
    

</script>

<style>
  .highlight {
    font-weight: bold;
  }

  .experience-list{
    padding-left: 0;
    display: flex;
    flex-direction: column;
  }

  .experience-point {
    display: inline-flex;
    align-items: center;
  }

  .experience-point-text{
    margin: 1px;
  }

  .dotSymbol {
    margin-right: 5px;
    font-size: 16px;
  }


</style>

{#if boldedSplitExprList}
<ul class="experience-list">
  {#each boldedSplitExprList as dotJot}
    <li class="experience-point">
      
      <p class="experience-point-text">
      <span class="dotSymbol">•</span>
      {#each dotJot as word, index}
      {#if index % 2 === 1}
        <b class="highlight">{` ${word}`}</b>
      {:else}
        {#if word.startsWith(",") || index === 0}
          {word}
        {:else}
          {` ${word}`}
        {/if}
      {/if}
      {/each}
    </p>
    </li>
  {/each}
</ul>

{:else}
  <p>Loading data ...</p> 
{/if}

