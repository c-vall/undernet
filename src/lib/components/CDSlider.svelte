<script>
  import { onMount } from 'svelte';
  import { register } from 'swiper/element/bundle';
  import { base } from '$app/paths';
  import { fade } from 'svelte/transition';


  const discs = [
    { id: 'DISC11BTN', label: 'DISC 1.1', img: 'cd11' },
    { id: 'DISC21BTN', label: 'DISC 2.1', img: 'cd21' },
    { id: 'DISC22BTN', label: 'DISC 2.2', img: 'cd22' },
    { id: 'DISC23BTN', label: 'DISC 2.3', img: 'cd23' },
    { id: 'DISC31BTN', label: '3.1:SURGE', img: 'cd31' },
    { id: 'DISC32BTN', label: '3.2:RAPTURE', img: 'cd32' },
    { id: 'DISC33BTN', label: '3.3:SHIMMER', img: 'cd33' },
    { id: 'DISC34BTN', label: '3.4:ECCENTRICS', img: 'cd34' }
  ];

  let selectedId = null;

  onMount(() => {
    register();
  });

  function handleClick(event, id) {
    event.preventDefault();
    selectedId = selectedId === id ? null : id;
    console.log(`Button ${id} clicked, selectedId now: ${selectedId}`);
  }

  function stopPropagation(event) {
    event.stopPropagation();
  }
</script>


  
<swiper-container
  effect="cards"
  grab-cursor="true"
  centered-slides="true"
  loop="false"
  mousewheel="true"
  keyboard="true"
  class="mySwiper"
  slideShadow="true"
>
  {#each discs as disc}
  <swiper-slide>
    <div
      id={disc.id}
      class="cdbutton {selectedId === disc.id ? 'spin' : ''}"
      on:click|preventDefault={(e) => handleClick(e, disc.id)}
      on:touchstart={stopPropagation}
    >
      <div
        class="layer case"
        style={`background-image: url('${base}/images/${disc.img}_case.png'); opacity: ${selectedId === disc.id ? 0 : 1};`}
      ></div>
      <div
        class="layer disc"
        style={`background-image: url('${base}/images/${disc.img}.png'); opacity: ${selectedId === disc.id ? 1 : 0};`}
      ></div>
  
      {disc.label}
    </div>
  </swiper-slide>
  
  {/each}
</swiper-container>


  
  <style>
    swiper-container {
      width: 100%;
      max-width: 500px;
      height: auto;
    }
  
swiper-slide {
  background: transparent !important;
  box-shadow: none !important;
  overflow-x: visible !important;
  overflow-y: visible !important;
}
  
.cdbutton {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0);
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
  transform-origin: center;
  overflow: hidden;
  
}

.cdbutton::before {
  content: "";
  display: block;
  padding-top: 100%;
}

/* Both layers (case and disc) */
.layer {
  position: absolute;
  inset: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 0.2s ease-in-out;
}

/* Spin animation */
.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

  
@media (max-width: 750px) {
  swiper-container {
    max-width: 70%;
  }
  
  .cdbutton {
    padding-top: 90%;
    width: 100%;
  }
}
</style>
  