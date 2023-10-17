
<script lang="ts">
    export let filterName = ""
    export let currentFieldFilter = "";
    import { mappedName } from 'src/stores/utils';
    import 'src/styles/variables.scss'



    function handleButtonClick() {
      currentFieldFilter = filterName
    }



</script>

<div class="wrapper">

  <div class="led {currentFieldFilter == filterName ? 'clicked' : ''}">•</div>

    <button class="button-3d 
      {mappedName(filterName)}  
      {currentFieldFilter == filterName ? 'clicked' : ''}" 
    on:click={handleButtonClick}    
  >
  </button>

  <div class="title">{filterName}</div>
</div>

    
  





  
  <style lang="scss">

    // NEEDS Improvement - 1
    $filters: 'languages', 'topics' , 'datastorage', 'frameworks', 'additional';
    
    :root {
      --button-size: 82px
    }

    .button-rim{
      background-color: black;
    }

    @each $filter in $filters{
      .#{$filter} {
        background-image: url('src/assets/fieldIcons/#{$filter}.svg');
      }
    }
  
    

    %test {
      position: absolute;
      content: '';
    }

    .button-3d {  
      height: var(--button-size);
      width: var(--button-size);

      background-position: center;
      background-size: contain; /* Use contain to preserve aspect ratio */
      background-repeat: no-repeat;

      background-color: var(--main-color);
      color: black;
      padding: 10px 20px;
      margin: 0 5px  5px 0;
      border: none;
      border-radius: 5px;
      font-size: 50px;
      cursor: pointer;
      
      transition: transform 0.3s ease;
      transform: scale(0.80) translate(-20%, -20%);
      
      border-style: solid;

      
      &::before {
        @extend %test;
        bottom: -9px;
        height: 7px;
        width: 105%;
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


        &.clicked{
          color: white;
          visibility: visible;
        }
      }

    .wrapper{
      margin: 5px 10px 0 10px;
    }

    .wrapper:hover .led{
      color: blue;
    }


    // Title
    .title{
      position: relative;
      font-style: italic;
      font-size: 13px;
      color: white;

      bottom: 12px;

      width: 65px;
      text-align: center;
    }



  </style>