<script lang="ts">
    import DepthButton from "./DepthButton.svelte";
    // export let skillCategory = "Languagues";
    // export let skillNames = ["Python", "Java", "NodeJs", "Postgresql", "Vue", "Docker", "bash", "django", "kafka", "svelte", "web", "git", "typescript", "llvm", "assembly", "antlr", "c", "cplusplus"];
    export let skillNames = ["llvm", "assembly", "antlr", "c", "cplusplus", "flask", "matlab"];

    import 'src/styles/variables.scss'
</script>

<div class="skills-keyboard">
    {#each skillNames as skillName}
        <DepthButton {skillName}/>
    {/each}
</div>


<style lang="scss">
    @use 'src/styles/variables.scss';
    .skills-keyboard{
        @extend .keyboardStyle 
    }
</style>
