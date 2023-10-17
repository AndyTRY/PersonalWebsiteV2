<script lang="ts">

    function darkenColor(hex:string, percent:number) {
        // Convert hex to RGB
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        // Darken the colors
        r = Math.round(r * (1 - percent / 100));
        g = Math.round(g * (1 - percent / 100));
        b = Math.round(b * (1 - percent / 100));

        // Convert back to hex
        let newHex = "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
        return newHex;
    }

    let colors = ['#FF5733', '#FFC300', '#4CAF50', '#03A9F4', '#9C27B0'];
    let darkenColors = colors.map(color => darkenColor(color, 40));

  
    function setColor(i:number) {
      document.documentElement.style.setProperty('--main-color', colors[i]);
      document.documentElement.style.setProperty('--main-color-darken', darkenColors[i]);
    }
  </script>
  
  <div class="color-picker">
    <div class="color-options" >
        {#each colors as color, i}
          <div class="color color-option" on:click={() => setColor(i)} style="background-color:{color}"></div>
        {/each}
      </div>

    <div class="color current-color"></div>

  </div>
  
  <style lang="scss">
    .color-picker {
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;

      margin-bottom: 15px;

      

      .color-option{
        visibility: hidden;
      }
    
      &:hover{
        .color-option{
            visibility: visible;
        }

        .color-options{
            background-color: #282728;
            // border-style: solid;

        }
      }



    }   

    .current-color{
        background-color: var(--main-color);
    }


    .color-options {


        position: relative;
        bottom: 8px;
        display: flex;
        gap: 5px;
        padding: 5px;

        border-radius: 5px;
        background-color: black;
        border-style: none ;
        border-color: var(--main-color) ;
        border-width: 2px ;
    }



  
    .color {
      width: 25px;
      height: 25px;

      border-radius: 20px;

      border: 2px solid white;
      cursor: pointer;
    }

    .color-option{
      width: 18px;
      height:   18px;
    }
  

  

  </style>