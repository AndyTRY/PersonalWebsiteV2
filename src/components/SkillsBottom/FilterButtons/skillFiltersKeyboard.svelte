<script lang="ts">
    import DepthButtonFilter from './DepthButtonFilter.svelte';
    
    import {skillFilterFlag, categoryFilter} from 'src/stores/store'
    // import {categories} from 'src/db/skillCategories'
    import { categories } from "src/db/SkillCategories";
</script>

<div class="skills-keyboard">
    {#each categories as filterName}
        <DepthButtonFilter {filterName} bind:currentFieldFilter={$categoryFilter}/>
    {/each}
</div>


<style lang='scss'>

    @use 'src/styles/variables.scss';

    .skills-keyboard{
        padding-left: 2em;
        border-style: none;
        // border-radius: 0 0 0 0;
        @extend .keyboardStyle   
    }
</style>
