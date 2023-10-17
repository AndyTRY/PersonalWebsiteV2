<script lang="ts">
    export let visible:Boolean;
    import {isFoucsedImage}  from 'src/stores/store';
  </script>
  
  <div class="modal-overlay" on:click={() => isFoucsedImage.set(!$isFoucsedImage)}  class:visible>
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
  
  <style>
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      z-index: 1000;
    }
  
    .visible {
      visibility: visible;
      opacity: 1;
    }
  
    .modal-content {
      background-color: black;
      padding: 5px;
      border-radius: 4px;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    }
  </style>
  