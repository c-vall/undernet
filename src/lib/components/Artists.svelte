<script> 
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { Draggable } from 'gsap/Draggable';
  
    let draggableBox;
  
    onMount(() => {
      if (typeof window === 'undefined') return;
  
      gsap.registerPlugin(Draggable);
  
      Draggable.create(draggableBox, {
        type: 'y',
        bounds: window,
        edgeResistance: 0.75,
        inertia: true,
        onRelease() {
          gsap.to(this.target, {
            duration: 0.5,
            y: this.endY,
            ease: 'power2.out',
          });
        }
      });
    });
  </script>
  
<div>
  <wrapper class="member-wrapper">
      <wrapper class="member-card-wrapper">
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
          <div class="member-card"></div>
      </wrapper>
      <wrapper class="member-profile">
      </wrapper>
    </wrapper>
</div>
<style>
.member-card-wrapper{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(11, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px; 
    flex: 2;
}

.member-card {
  background-image: url('/images/window_bg.png');
  background-size: cover;
  background-repeat: repeat;
  border: ridge 3px #c0c0c0;
  border-radius: 10px 6px 20px 6px;
  outline: solid 3px black;
  overflow: visible;
  position: relative;
  min-height: 300px;
}

.member-wrapper{
  display: flex;

}

.member-profile{
  flex: 1;

}

.member-card-wrapper::-webkit-scrollbar {
  width: 6px;
}

.member-card-wrapper::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 4px;
}

</style>