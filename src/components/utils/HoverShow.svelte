<script>
    
</script>
  
  <div class="wrapper">
    <div class="hover-element">
        <slot name="hover-element"></slot>
    </div>
    

    <div class="hover-show-element hidden">
        <slot name="hover-show-element"></slot>
    </div>
    
  </div>
  
  <style>

    .hover-show-element{
        position: absolute;
        visibility: hidden;
        top: -33px;
        left: 53px;
    }

    .wrapper:hover .hover-show-element{
        visibility: visible;
    }

    
  </style>
  