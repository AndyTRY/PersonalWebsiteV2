<script lang="ts">
    import { isKeyboardVisible, isKeyboardEnabled } from "src/stores/store";
    
    import SkillsBottom from "./SkillsBottom.svelte";


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
  
  <div class="{`bottom-nav ${$isKeyboardVisible && $isKeyboardEnabled  ? 'visible' : ''}`}">
    <SkillsBottom/>
  </div>