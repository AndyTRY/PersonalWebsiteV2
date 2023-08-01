<script lang="ts">

	import SkillsKeyboard from 'src/components/speey/SkillsKeyboard.svelte';
	import SkillCategoryKeyboard from 'src/components/speey/SkillCategoryKeyboard.svelte';
    import SkillStatsDisplay from './SkillStatsDisplay.svelte';

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