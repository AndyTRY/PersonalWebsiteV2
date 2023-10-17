
<script lang="ts">

    import {hoveredSkill, filterMode, searchQuery } from 'src/stores/store';
    import type {FilterMode} from 'src/stores/store'
    import 'src/styles/variables.scss'
    import { mappedName } from 'src/stores/utils';

    export let text = ""
    export let active = false;
    export let mode: FilterMode;
    export let isDisplay = true;


    function handleButtonClick() {
      filterMode.set(mode)
    }
    
</script>

<div class="wrapper {!isDisplay ? 'no-display': ''}">


  <div class="led {active ? 'clicked' : ''}">•</div>
  <button class="button-3d {active ? 'clicked' : ''}"
          on:click={handleButtonClick}   
  >
    {text}
  </button>
</div>

    
  





  
  <style lang="scss">
    
    :root {
      --button-size: 82px
    }

    .button-rim{
      background-color: black;
    }

    .wrapper{
        width: 100%;
        margin: none;
    }
    .no-display{
      display: none;
    }
    

    %test {
      position: absolute;
      content: '';
    }

    .button-3d {  
        font-size: 25px;
        font-weight: 900;

      width: 110%;
 
      background-position: center;
      background-size: contain; /* Use contain to preserve aspect ratio */
      background-repeat: no-repeat;

      background-color: var(--main-color);
      color: black;

      margin: 0 5px  5px 0;

      border: none;
      border-radius: 5px;
      
      
      cursor: pointer;
      
      /* transform: perspective(200px) rotateX(45deg); */
      transition: transform 0.3s ease;
      transform: scale(0.80) translate(-10%, -20%);
      
      border-style: solid;

      
      &::before {
        @extend %test;
        bottom: -9px;
        height: 7px;
        width: 101%;
        left: 2px;
        transform: skewX(45deg);
        background-color: black;
      }

      &::after {
        @extend %test;
        right: -9px;
        height: 100%;
        width: 7px;
        bottom: -4px;
        transform: skewY(45deg);
        background-color: white
      }

      &:active {
        margin:  5px 0 0 5px;
        &::before {
          bottom: -5px;
          height: 5px;
          left: 0px;
        }
        
        &::after {
          height: 100%;
          right: -7px;
          width: 5px;
          bottom: -2px;
        }	
      }
      

      &.clicked {
        background-color: #d7d8d7;
        border-color: #d7d8d7;
        filter: invert(100%);

        &::before {
          background-color: #d7d8d7
        }
        &::after {
          background-color: #d7d8d7
        }

      }

    }



    // LED
    .led{
        position: relative;
        visibility: hidden;
        z-index: 1;
        left:25px;
        top:7px;

        height: 5px;
        width: 5px;
        

        &.clicked{
          color: white;
          visibility: visible;
        }
      }


    .wrapper:hover .led{
      color: blue;
    }




  </style>