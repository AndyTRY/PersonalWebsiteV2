<script lang="ts">
    import { isKeyboardVisible, isKeyboardEnabled, sectionState, Section } from "src/stores/store";
    
    import SkillsBottom from "./SkillsBottom/SkillsBottom.svelte";
    import { derived } from 'svelte/store';
    

    const passCriteria = derived([isKeyboardEnabled,  isKeyboardVisible,  sectionState], 
                               ([$isKeyboardEnabled, $isKeyboardVisible, $sectionState]) => {

        const onExperienceSection: boolean = ["WRK", "PRO"].includes($sectionState);  
        
        console.log("OnEXP",  onExperienceSection)
        return $isKeyboardEnabled && $isKeyboardVisible && onExperienceSection;
    });

  </script>
  
  <style>

    .bottom-nav {
      position: fixed;
      transition: bottom 0.3s ease;

      width: 70%;

      bottom: -500px;
    }
  
    .visible {
      bottom: 0;
    }
  </style>
  
  <!-- <div class="{`bottom-nav ${passCriteria() ? 'visible' : ''}`}">
    <SkillsBottom/>
  </div> -->

  <div class="{`bottom-nav ${$passCriteria? 'visible' : ''}`}">
    <SkillsBottom/>
  </div>