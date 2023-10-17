<script lang="ts">
	import SkillCategoryKeyboard from './FilterButtons/SkillCategoryKeyboard.svelte';
    import SkillStatsDisplay from './SkillStatsDisplay/SkillStatsDisplay.svelte';
	import FilterButtons from './FilterButtons/FilterButtons.svelte';
    import {FilterMode, filterMode} from 'src/stores/store';
	import { categories } from 'src/db/SkillCategories';
  </script>

<div class="section-bottom">
    <FilterButtons/>

    <div class="skills-section-bottom">

        <div class="section-left">
            <SkillStatsDisplay/>
        </div>
        
    
    
        <div class="skill-keyboards {$filterMode == FilterMode.Categories ? "visible" : ''}">
            <SkillCategoryKeyboard/>
        </div>
    
    </div>
</div>


<style>
    .section-bottom{
        background-color: black;
        display: flex;
        flex-direction: column;
        gap : 1em;
    }

	.skills-section-bottom{
		display: flex;
        flex-direction: row;
        justify-content: space-between;

        gap: 2em;
        width: 100%;
        border-style: solid;
        border-radius: 15px 15px 0 0;
        border-bottom: none;

        padding-bottom: 3em;
	}

    .section-left {
        width: 20%; /* Set the width to 20% */
        max-width: 20%;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .skill-keyboards{
        flex: 1;
        display: flex;
        gap: 1em;
        visibility: hidden;
    }
    .visible {
        visibility: visible;
    }



</style>