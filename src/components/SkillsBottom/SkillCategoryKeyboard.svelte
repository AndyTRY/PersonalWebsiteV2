<script lang="ts">
    import DepthButton from "./DepthButton.svelte";
    export let skillNames = ["Compiler", "Web", "AI", "Parallel Processing", 'OS', '3D Modeling'];
</script>

<div class="skills-keyboard">
    {#each skillNames as skillName}
        <DepthButton {skillName}/>
    {/each}
</div>


<style lang='scss'>

    @use 'src/styles/variables.scss';

    .skills-keyboard{
        @extend .keyboardStyle   
    }
</style>
