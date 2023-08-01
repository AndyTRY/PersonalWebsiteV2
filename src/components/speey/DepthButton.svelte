

    



  
  <script lang="ts">
    export let skillName = ""

    // import { skillCategory } from "src/db/SkillCategories";

    // const skills = Object.keys(skillCategory).map(x => x.toLowerCase());
    // console.log(skills.toString());
    
  </script>

  <button class="button-3d {skillName.toLowerCase()}">
    
  
  </button>




  
  <style lang="scss">

    // NEEDS Improvement
    // $skills: 'projects','python','c','java','javascript','djanjo','nodejs','svelte','vue','web','scripting','os','complier','image-processing','parallel-computing','networking','cad-modeling','docker','git','vscode','terminal','perl','bash','github','microservices','kafka','sql';
    $skills: 'python', 'nodejs', 'java', 'vue', 'kafka', 'c', 'git', 'bash', 'svelte', 'docker', 'typescript', 'django', 'web', 'postgresql', 'llvm', 'assembly', 'antlr', 'cplusplus', 'flask', 'matlab', 'compiler', 'ai';
    
    :root {
      --button-size: 82px
      

    }export text as svg



    .button-rim{
      background-color: black;
    }


    %test {
      position: absolute;
      content: '';
    }

    @each $skill in $skills{
      .#{$skill} {
        background-image: url('src/assets/skillIcons/#{$skill}.svg');
      }
    }
    


    .button-3d {  
      margin: 3px;
      height: var(--button-size);
      width: var(--button-size);

      // background-image: url('src/assets/skillIcons/java.svg');
      background-position: center;
      background-size: contain; /* Use contain to preserve aspect ratio */
      background-repeat: no-repeat;

      background-color: white;
      color: white;
      padding: 10px 20px;
      margin: 0 5px  5px 0;
      border: none;
      border-radius: 5px;
      font-size: 50px;
      cursor: pointer;
      
      /* transform: perspective(200px) rotateX(45deg); */
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
        background-color: darken(white, 20%);

      
    
      }

      &::after {
        @extend %test;
        right: -9px;
        height: 105%;
        width: 7px;
        bottom: -6px;
        transform: skewY(45deg);
        background-color: darken(white, 30%);
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

    }

  </style>