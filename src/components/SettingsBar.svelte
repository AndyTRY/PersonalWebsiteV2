<script lang="ts">
    import {
        isKeyboardEnabled,
        experienceDisplayMode,
        sectionState,
        boundaryRelationshipWorkExperienceSection,
        boundaryRelationshipProjectsSection,

        SetNextDisplayMode,

        DisplayMode,

    } from "src/stores/store";


    function ToggleDisplayMode(){
        SetNextDisplayMode()
        isKeyboardEnabled.set(false)
    }
    
</script>


  

<div class="settings">

    <!-- Current Section Status --> 
    <div class="section-status">
        {$sectionState}
    </div>

    <!-- DisplayView Setting -->
    <button class="displayview-toggle setting-icon"
            class:displayview-carousel="{$experienceDisplayMode === DisplayMode.Carousel}"
            class:displayview-list="{$experienceDisplayMode === DisplayMode.List}"
            on:click="{ToggleDisplayMode}">
    </button>


    <!-- Keyboard Setting -->
    <button class='keyboard-toggle setting-icon'
            class:rotate="{$isKeyboardEnabled}"
            on:click="{() => isKeyboardEnabled.set(!$isKeyboardEnabled)}">
    </button>


</div>


<style lang="scss">

    .settings{
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    .section-status{
        color: white;
        font-weight: bolder;
        font-family: 'system-ui';
    }




    .setting-icon{
        background-color: transparent;
        border: none; /* Add this line to remove the button border */

        width: 35px;
        height: 35px;

        background-position: center;
        background-size: contain; /* Use contain to preserve aspect ratio */
        background-repeat: no-repeat;

        position: relative;
        transition: transform 0.3s;
    }

    .setting-icon:hover {
        transform: scale(1.1);
    }

    .displayview-carousel{
        background-image: url('src/assets/otherIcons/carouselview.svg');
    }

    .displayview-list{
        background-image: url('src/assets/otherIcons/listview.svg');
    }

    .keyboard-toggle{
        transition: transform 0.3s;
        filter: brightness(60%);
        background-image: url('src/assets/otherIcons/settings.svg');
    }

    .rotate {
        filter: brightness(100%);
        // transform: rotate(90deg), ;
    }

</style>