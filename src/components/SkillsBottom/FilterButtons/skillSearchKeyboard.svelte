<script lang="ts">
    import DepthButton from "src/components/SkillsBottom/DepthButton.svelte";
    import {searchFilterSkills, skillFilterFlag} from "src/stores/store";
	import { afterUpdate, onMount } from "svelte";
    import { derived } from 'svelte/store';


    const buttonWidth = 210;
    let maxButtonsFitable = 0;
    let firstK:string[] = [];

    function updateMaxButtonsFitable() {
        maxButtonsFitable = Math.floor(window.innerWidth / buttonWidth);
        firstK = $searchFilterSkills.slice(0, maxButtonsFitable);
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
        padding-left: 2em;
        border-style: none;
        @extend .keyboardStyle   
    }
</style>
