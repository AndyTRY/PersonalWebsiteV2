<script lang="ts">
    import DepthButton from "../DepthButton.svelte";    
    import {skillFilterFlag, categoryFilter} from 'src/stores/store'
    import { categorySkills } from "src/db/SkillCategories";
    import { derived } from 'svelte/store';
	import { afterUpdate, onMount } from "svelte";

    const skills = derived(categoryFilter, ($categoryFilter: string) => categorySkills[$categoryFilter]);


    const buttonWidth = 210;
    let maxButtonsFitable = 0;
    let firstK:string[] = [];

    function updateMaxButtonsFitable() {
        maxButtonsFitable = Math.floor(window.innerWidth / buttonWidth);
        firstK = $skills.slice(0, maxButtonsFitable);
    }


	onMount(() => {
        updateMaxButtonsFitable()
		window.addEventListener('resize', updateMaxButtonsFitable);
        return () => {
			window.removeEventListener('resize', updateMaxButtonsFitable);
        };
    });

    afterUpdate(() => {
        updateMaxButtonsFitable();
    });

</script>

<div class="skills-keyboard">
    {#each firstK as skillName}
        <DepthButton {skillName} bind:isOn={$skillFilterFlag[skillName]}/>
    {/each}
</div>


<style lang='scss'>

    @use 'src/styles/variables.scss';

    .skills-keyboard{
        position: relative;
        right: 3px;
        padding-left: 2em;
        height: 8.5em;
        width: 100%;
        @extend .keyboardStyle   
    }
</style>
