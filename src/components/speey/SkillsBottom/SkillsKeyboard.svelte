<script lang="ts">
    import DepthButton from "./DepthButton.svelte";
    export let skillCategory = "Languagues";
    // export let skillNames = ["Python", "Java", "NodeJs", "Postgresql", "Vue", "Docker", "bash", "django", "kafka", "svelte", "web", "git", "typescript", "llvm", "assembly", "antlr", "c", "cplusplus"];
    export let skillNames = ["llvm", "assembly", "antlr", "c", "cplusplus", "flask", "matlab" ];
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
        background-color: black;
        /* background:  linear-gradient(to bottom, grey, grey); */
        /* background:  linear-gradient(to bottom, silver,grey, silver,  silver); */
        /* transform: perspective(200px) rotateX(10deg); */
        padding: 1em;
        
    }
</style>
