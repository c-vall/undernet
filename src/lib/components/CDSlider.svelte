<script>
    import { onMount } from 'svelte';
    import { register } from 'swiper/element/bundle';
  
    const discs = [
      { id: 'DISC11BTN', label: 'DISC 1.1', img: 'cd11.png' },
      { id: 'DISC21BTN', label: 'DISC 2.1', img: 'cd21.png' },
      { id: 'DISC22BTN', label: 'DISC 2.2', img: 'cd22.png' },
      { id: 'DISC23BTN', label: 'DISC 2.3', img: 'cd23.png' },
      { id: 'DISC31BTN', label: '3.1:SURGE', img: 'cd31.png' },
      { id: 'DISC32BTN', label: '3.2:RAPTURE', img: 'cd32.png' },
      { id: 'DISC33BTN', label: '3.3:SHIMMER', img: 'cd33.png' },
      { id: 'DISC34BTN', label: '3.4:ECCENTRICS', img: 'cd34.png' }
    ];
  
    onMount(() => {
      register();
    });
  
    function handleClick(event, id) {
      event.preventDefault();
      const buttons = document.querySelectorAll('.cdbutton');
      buttons.forEach(btn => btn.classList.remove('spin'));
      event.currentTarget.classList.add('spin');
      console.log(`Button ${id} clicked`);
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
    slideShadow="false"
  >
    {#each discs as disc}
      <swiper-slide>
        <div
          id={disc.id}
          class="cdbutton"
          on:click|preventDefault={(e) => handleClick(e, disc.id)}
          on:touchstart={stopPropagation}
          style={`background-image: url('/images/${disc.img}')`}
        >
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
}
  
    .cdbutton {
        width: 100%;
        aspect-ratio: 1 / 1;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0);
        filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
        transform-origin: center;
}

  
    .cdbutton::before {
      content: "";
      display: block;
      padding-top: 100%;
    }

  
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
  