<script lang="ts">

	import SkillsKeyboard from './SkillsBottom/SkillsKeyboard.svelte';
	import SkillCategoryKeyboard from './SkillsBottom/SkillCategoryKeyboard.svelte';
    import SkillStatsDisplay from './SkillsBottom/SkillStatsDisplay.svelte';

  </script>

<div class="skills-section-bottom">

    <SkillStatsDisplay/>


    <div class="skill-keyboard">
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
        

        width: 90%;
	}


</style>