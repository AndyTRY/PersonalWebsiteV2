<script lang="ts">
    import { text } from "@sveltejs/kit";
    import FilterButton from "./FilterButton.svelte";
	import SkillCategoryKeyboard from "./SkillCategoryKeyboard.svelte";
    import SkillSearchKeyboard from "./skillSearchKeyboard.svelte";
    import SkillFiltersKeyboard from "./skillFiltersKeyboard.svelte";
    import { FilterMode, filterMode } from "src/stores/store";
	import FilterSearch from "./FilterSearch.svelte";

</script>

<div class="filters-keyboard">
    <div class="filter-options">
        <FilterButton text="All" active={$filterMode == FilterMode.All} mode={FilterMode.All} />
        <FilterButton text="Filtered" active={$filterMode == FilterMode.Categories} mode={FilterMode.Categories}/>
        <FilterButton text="Search"  mode={FilterMode.Search} isDisplay={$filterMode != FilterMode.Search}/>
        <FilterSearch isDisplay={$filterMode == FilterMode.Search}/>
    </div>

    <div class="filter-fields hidden {$filterMode == FilterMode.Categories? 'visible' : ''}">
        <SkillFiltersKeyboard/>
    </div>

    <div class="filter-search hidden {$filterMode == FilterMode.Search? 'visible' : ''}">
        <SkillSearchKeyboard/>
    </div> 

</div>


<style lang='scss'>

    @use 'src/styles/variables.scss';

    .filters-keyboard{
        display: flex;
        flex-direction: row;
        @extend .keyboardStyle   
        
    }

    .filter-options{
        width: 20%;
        max-width: 20%;
        display: flex;
        flex-direction: column;
        padding: 0.3em 0em 0.15em 0.15em;
    }

    .filter-fields{
        flex: 1;
        padding-left: 1.5em;
    }

    .filter-search{
        padding-left: 1.5em;
    }

    .hidden{
        display: none;
    }

    .visible{
        display: block;
    }
</style>
