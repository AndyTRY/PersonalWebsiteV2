<script lang="ts">
    import DepthButton from "./DepthButton.svelte";
    export let skillNames = ["compiler", "web", "ai"];
</script>

<div class="skills-keyboard">
    {#each skillNames as skillName}
        <DepthButton {skillName}/>
    {/each}
</div>


<style>
    .skills-keyboard{
        display: flex;
        gap: 20px;
        border-style: solid;
        background:  linear-gradient(to bottom, grey,grey, grey,  grey);
        /* background:  linear-gradient(to bottom, silver,grey, silver,  silver); */
        /* transform: perspective(200px) rotateX(10deg); */
        padding: 1em;
        
    }
</style>
