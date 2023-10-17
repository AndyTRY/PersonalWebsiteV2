<script lang="ts">
    import { isKeyboardVisible, isKeyboardEnabled, sectionState, Section } from "src/stores/store";
    
    import SkillsBottom from "./SkillsBottom/SkillsBottom.svelte";
    import { derived } from 'svelte/store';
    

    const passCriteria = derived([isKeyboardEnabled,  isKeyboardVisible,  sectionState], 
                               ([$isKeyboardEnabled, $isKeyboardVisible, $sectionState]) => {

        const onExperienceSection: boolean = ["TIL", "WRK", "PRO", "OTH", "END"].includes($sectionState);  
        return $isKeyboardEnabled && $isKeyboardVisible && onExperienceSection;
    });

  </script>
  
  <style>

    .bottom-nav {
      position: fixed;
      transition: bottom 0.3s ease;

      width: 70%;

      bottom: -500px;
      z-index: 1;

    }
  
    .visible {
      bottom: 0;
    }

    .trasparent-blur{
      width: 100%;
      height: 8em;
      /* -webkit-mask: linear-gradient(transparent, black, black);
	    backdrop-filter: blur(10px); */
      background: linear-gradient(transparent, transparent, black, black);
  }

  /* .gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5em;
    background: mask linear-gradient(transparent, black, black);
    pointer-events: none;
    z-index: 2;
  } */
  </style>
  
  <div class="{`bottom-nav ${$passCriteria? 'visible' : ''}`}">
    <!-- <div class="gradient"></div> -->
    <div class="trasparent-blur"></div>
    <SkillsBottom/>
  </div>