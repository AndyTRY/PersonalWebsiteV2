<script>
    export let visible;
</script>
  
  <div class="hover-modal-overlay" class:visible>
    <div class="hover-modal-content">
      <slot></slot>
    </div>
  </div>
  
  <style>
    .hover-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      z-index: 1000;
    }
  
    .visible {
      visibility: visible;
      opacity: 1;
    }
  
    .hover-modal-content {
      position: absolute;
      background-color: white;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    }
  </style>
  