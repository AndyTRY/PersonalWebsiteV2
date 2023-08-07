<!-- <script>
    import Modal from './utils/AboveElementModal.svelte'
    import Popout1 from './Popout1.svelte';

  
    let currentPopout = null;
    let hoverX = 0;
    let hoverY = 0;
    let hoverModalVisible = false;
  
    function handleHover(layout, event) {
      currentPopout = layout;
      hoverX = event.clientX;
      hoverY = event.clientY - 40; // Adjust this value for positioning
      hoverModalVisible = true;

      
    }
  
    function handleUnhover() {
      currentPopout = null;
      hoverModalVisible = false;
    }
  </script>
  
  <div
    class="hover-container"
    on:mouseover={(event) => handleHover(Popout1, event)}
    on:mouseout={handleUnhover}
  >
    Hover over me
  </div>
  
  <Modal visible={hoverModalVisible} x={hoverX} y={hoverY}>
    {#if currentPopout}
      <svelte:component this={currentPopout} />
    {/if}
  </Modal>
  
  <style>
    .hover-container {
      position: relative;
      display: inline-block;
      padding: 10px;
      background-color: #f0f0f0;
      cursor: pointer;
    }
  </style>
   -->