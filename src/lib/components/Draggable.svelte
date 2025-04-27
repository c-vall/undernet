<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { Draggable } from 'gsap/Draggable';
    import { base } from '$app/paths';
  
    let draggableBox; 
  
    onMount(() => {
      if (typeof window === 'undefined') return;
  
      gsap.registerPlugin(Draggable); 
  
      Draggable.create(draggableBox, {
        type: 'x,y',
        bounds: window,
        edgeResistance: 0.75,
        liveSnap: true,
        onRelease: function() {
            gsap.to(this.target, {
                duration: 0.5,
                x: this.endX,
                y: this.endY,
                ease: 'power2.out(5.7)',
  });
}

      });
    });
  </script>
  
  
  <div bind:this={draggableBox} class="draggable-container">
    <img src="{base}/images/map.png" alt="Logo" />
  </div>
  
  <style>
    .draggable-container {
      width: 1000px;
      background: rgba(102, 1, 1, 0);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: grab;
      user-select: none;
      position: absolute;
      filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
      top: 10%;
    }
    
    .draggable-container img {
      width: 80%;
      margin: auto;
      display: block;
      animation: pulse 2s infinite alternate;
      
    }

</style>
  