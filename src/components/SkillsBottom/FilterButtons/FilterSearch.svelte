
<script lang="ts">

    import {hoveredSkill, filterMode, searchQuery } from 'src/stores/store';
    import type {FilterMode} from 'src/stores/store'
    import 'src/styles/variables.scss'
    import { mappedName} from 'src/stores/utils';

    export let isDisplay = true;

    let timeout: NodeJS.Timeout;

    function handleInput(event: Event) {
        // clearTimeout(timeout); 
        // timeout = setTimeout(() => {
          searchQuery.set((event.target as HTMLInputElement)?.value || '');
        // }, ); // Set a new timeout of 300 milliseconds
    }

    
</script>

<div class="wrapper {!isDisplay ? 'no-display': ''}">


  <div class="led ">•</div>
  <input type="text" 
         class="search" 
         placeholder="Search..."
         on:input={handleInput}/>
    

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

    .search {  
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
      
    
      transition: transform 0.3s ease;
      transform: scale(0.80) translate(-10%, -20%);
      
      border-style: solid;

      &::placeholder{
        color: #282728;
      }

      
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
    }




  </style>