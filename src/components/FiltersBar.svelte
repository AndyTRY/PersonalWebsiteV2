<!-- VerticalButtons.svelte -->

<script>
    import { SkillFilterFlagList, skillFilterFlag, filterMode, FilterMode} from "src/stores/store";
	  import DepthButtonBlack from "./SkillsBottom/DepthButtonBlack.svelte";
  </script>
  
  {#if $filterMode != FilterMode.All}
      <div class="vertical-buttons">
        {#each $SkillFilterFlagList as skillName}
            <DepthButtonBlack {skillName} bind:isOn={$skillFilterFlag[skillName]}/>
        {/each}
      </div>
  {/if}
  
  <style>
    .vertical-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-left: 20px;
      margin-top: 30px;
    }
  </style>
  