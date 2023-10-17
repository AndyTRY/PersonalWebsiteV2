<script lang="ts">
    import {
        isKeyboardEnabled,
        experienceDisplayMode,
        sectionState,
        boundaryRelationshipWorkExperienceSection,
        boundaryRelationshipProjectsSection,
        SectionFullName,
        SetNextDisplayMode,

        DisplayMode,
		filterMode,
		FilterMode,

    } from "src/stores/store";

    import { derived } from 'svelte/store';
	import ColorSetting from "./ColorSetting.svelte";



    const DisplayModeFullName :{ [key: number]: string } = {
        [DisplayMode.List] : "List",
        [DisplayMode.Carousel] : "Carousel"
    };

    const sectionStateFullName = derived([sectionState],([$sectionState]) => {
        return SectionFullName[$sectionState] || "Unknown"
    });

    const displayModeFullName = derived([experienceDisplayMode],([$experienceDisplayMode]) => {
        return DisplayModeFullName[$experienceDisplayMode] || "Unknown"
    });

    function ToggleDisplayMode(){
        SetNextDisplayMode()
        isKeyboardEnabled.set(false)
    }

</script>


  

<div class="settings">



    <!-- Current Section Status --> 
    <div class="widget widget-display1">
        <div class="hidden">Section</div>
        <div class="status">
            {$sectionState}
        </div>
        <div class="hidden">{$sectionStateFullName}</div>
    </div>

    <!-- Experience Mode: [All, Filtered] --> 
    <div class="widget widget-display2">
        <div class="hidden">Experiences</div>
        <div class="status">
            {$filterMode == FilterMode.All ? "ALL" : "FIL"}
        </div>
        <div class="hidden">{$filterMode == FilterMode.All ? "All" : "Filtered"}</div>
    </div>

    <!-- Current Site Color --> 
    <ColorSetting/>

    <!-- DisplayView Setting -->
    <div class="widget"> 
        <div class="hidden display-mode-head">Display</div>
            <button class="displayview-toggle setting-icon"
                class:displayview-carousel="{$experienceDisplayMode === DisplayMode.Carousel}"
                class:displayview-list="{$experienceDisplayMode === DisplayMode.List}"
                on:click="{ToggleDisplayMode}">
            </button>
        <div class="hidden display-mode-name">{$displayModeFullName}</div>
    </div>



    <!-- Keyboard Setting -->
    <div class="widget"> 
        <div class="hidden">Settings</div>
        <button class='keyboard-toggle setting-icon'
                class:rotate="{$isKeyboardEnabled}"
                on:click="{() => isKeyboardEnabled.set(!$isKeyboardEnabled)}">
        </button>
        <!-- class:warning-color="{$sectionState === 'TIL' && $isKeyboardEnabled}" -->
        

        <!-- <div class="hidden-warning {($sectionState !== 'TIL' || !$isKeyboardEnabled) ? 'hiddener' : "hidden"}"> -->
        <div class="hidden-warning hiddener">
            <img src="src/assets/otherIcons/warning.svg"  alt="warning">
            <div class="warning-text">The following is not enabled for sections: "TIL"</div>
        </div>
    </div>


</div>


<style lang="scss">

    .hidden-warning{
        display: flex;
        flex-direction: row;

        visibility: hidden;

        .warning-text{
            font-size: small;
            width: 10em;
            height: fit-content;
        }
    }





    .settings{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .status{
        color: white;
        font-weight: bolder;
        font-family: 'system-ui';
        text-align: center;
    }


    .setting-icon{
        background-color: transparent;
        border: none; /* Add this line to remove the button border */

        width: 2em;
        height: 2em;

        background-position: center;
        background-size: contain; /* Use contain to preserve aspect ratio */
        background-repeat: no-repeat;

        position: relative;
        transition: transform 0.3s;
        
        align-self: center;
    }

    .setting-icon:hover {
        transform: scale(1.1);
    }


    .displayview-carousel{
        margin-top: 0;
        background-image: url('src/assets/otherIcons/carouselview.svg');
    }

    .displayview-list{
        margin-top: 0;
        background-image: url('src/assets/otherIcons/listview.svg');

        position: relative;
        left: 2px;
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

    .warning-color{
        background-image: url('src/assets/otherIcons/settings-yellow.svg');
    }


    .widget{
        display: flex;
        flex-direction: column;

        color: white;
        gap : 4px;

    

        .hiddener   {
            visibility: hidden;
        }

        .hidden{
            visibility: hidden;
            font-size: 15px;
            font-style: italic;
            text-align: center;
            font-weight: bold;
        }
        &:hover .hidden {
            visibility: visible;
        }

        &:hover .setting-icon{
            transform: scale(1.15);
        }
    }

    .widget-display2{
        margin-bottom: 1em;
    }

    .display-mode-name{
        position: relative;
        left: -2px;
        top: 2px;
    }

    .display-mode-head{
        position: relative;
        bottom: 2px;
    }
    




</style>