<script lang="ts">

	import SkillsKeyboard from './SkillsKeyboard.svelte';
	import SkillCategoryKeyboard from './SkillCategoryKeyboard.svelte';
    import SkillStatsDisplay from './SkillStatsDisplay/SkillStatsDisplay.svelte';

  </script>

<div class="skills-section-bottom">

    <SkillStatsDisplay/>


    <div class="skill-keyboards">
        <SkillsKeyboard/>
        <SkillCategoryKeyboard/>
    </div>

    


</div>

<style>
	.skills-section-bottom{
		display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 2em;
        
 
        width: 100%;

        background-color: black;
        
        border-style: solid;
        border-radius: 15px 15px 0 0;
        /* border-color: var(--main-color); */
        border-bottom: none;

        padding-bottom: 3em;
	}

    .skill-keyboards{
        display: flex;
        flex-direction: column;
        gap: 1em;

    }



</style>