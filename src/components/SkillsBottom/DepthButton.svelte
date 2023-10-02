
<script lang="ts">
    export let skillName = ""
    import { hoveredSkill } from 'src/stores/store';
    import 'src/styles/variables.scss'

    let isButtonClicked = false;



    function handleButtonClick() {
      isButtonClicked = !isButtonClicked;
    }

    function handleButtonHover() {
      hoveredSkill.set(skillName);
    }

    function mappedName(skillName: string){
      if (skillName === "3D Modeling") return "threedmodeling"
      if (skillName === "C++")         return "cplusplus"

      return skillName.replace(' ', '').toLowerCase()
    }

</script>

<div class="wrapper">

  <div class="led {isButtonClicked ? 'clicked' : ''}">•</div>

    <button class="button-3d 
      {mappedName(skillName)}  
      {isButtonClicked ? 'clicked' : ''}" 
    on:click={handleButtonClick}    
    on:mouseenter={handleButtonHover} 
  >
  </button>

  <div class="title">{skillName}</div>
</div>

    
  





  
  <style lang="scss">

    // NEEDS Improvement - 1
    $skills: 'python', 'nodejs', 'java', 'vue', 'kafka', 'c', 'git', 'bash', 'svelte', 'docker', 'typescript', 'web', 'postgresql', 'llvm', 'assembly', 'antlr', 'cplusplus', 'flask', 'matlab', 'mongodb', 'autocad';
    $skillCategories: 'ai' , 'web', 'compiler', 'parallelprocessing', 'os' , 'threedmodeling';
    
    :root {
      --button-size: 82px
    }

    .button-rim{
      background-color: black;
    }

    @each $skill in $skills{
      .#{$skill} {
        background-image: url('src/assets/skillIcons/#{$skill}.svg');
      }
    }
    
    @each $category in $skillCategories{
      .#{$category} {
        background-image: url('src/assets/skillCategoryIcons/#{$category}.svg');
      }
    }
    

    %test {
      position: absolute;
      content: '';
    }

    .button-3d {  
      margin: 3px;
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
      
      /* transform: perspective(200px) rotateX(45deg); */
      transition: transform 0.3s ease;
      transition: invert 0.3 ease;
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
        height: 105%;
        width: 7px;
        bottom: -6px;
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
          right: -5px;
          width: 5px;
          bottom: -3px;
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