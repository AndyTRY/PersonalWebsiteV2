<!-- Tag.svelte -->
<script lang="ts">
    export let text = '';
    import {categoryTagColorCodes} from "src/db/TagColorCodes";
    import {skillCategory} from "src/db/SkillCategories"


</script>

<style>
  .tag {
    display: inline-block;
    font-size: 10px;
    padding: 4px 8px;
    margin-right: 6px;
    font-weight: bold;

    border-radius: 15px;
    border-style: solid;
    border-width: thin;
    border-color: black;
  }
</style>

<div class="tag" style="background-color: {categoryTagColorCodes[skillCategory[text]] || 'gray'}">
  <img src="src/assets/otherIcons/warning.svg"  alt="warning">
  {text}
</div>