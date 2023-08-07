<!-- <script>
  import Modal from './modals/CenterFixed.svelte';
  import Popout1 from './Popout1.svelte';


  let currentPopout = null;
  let showModal = false;
  let hoverTimeout;

  function handleHover(layout) {
    currentPopout = layout;
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      showModal = true;
    }, 300); // Adjust the delay time as needed
  }

  function handleUnhover() {
    clearTimeout(hoverTimeout);
    showModal = false;
    currentPopout = null;
  }
</script>

<div
  class="hover-container"
  on:mouseover={() => handleHover(Popout1)}
  on:mouseout={handleUnhover}
>
  Hover over me
</div>

<Modal visible={showModal}>
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
</style> -->
