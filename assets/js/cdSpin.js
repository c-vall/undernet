document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('#disc-slider', {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      gap: '1rem',
      pagination: false,
      arrows: false,
      focus: 'center',
      breakpoints: {
        768: { perPage: 2 },
        480: { perPage: 1 },
      },
    });
  
    splide.mount();
  
    const slider = document.querySelector('#disc-slider');
  
    slider.addEventListener('click', function (event) {
      const button = event.target.closest('.cdbutton');
      if (!button) return;
  
      // Find the slide element
      const slideEl = button.closest('.splide__slide');
      if (!slideEl) return;
  
      // Get the index from Splide's internal map
      const slides = splide.Components.Slides.get();
      let realSlide = null;
  
      slides.forEach(slide => {
        if (slide.slide === slideEl || slide.slide.dataset.cloned === 'true' && slideEl.dataset.index === slide.slide.dataset.index) {
          realSlide = slide;
        }
      });
  
      if (!realSlide) {
        // fallback: try getting index directly
        const slideIndex = slideEl.getAttribute('data-splide-index');
        if (slideIndex !== null) {
          realSlide = splide.Components.Slides.getAt(Number(slideIndex));
        }
      }
  
      if (!realSlide) return;
  
      // Remove 'rotate' from all buttons
      document.querySelectorAll('.cdbutton').forEach(btn => btn.classList.remove('rotate'));
  
      // Add 'rotate' to the real slide's button
      const originalButton = realSlide.slide.querySelector('.cdbutton');
      if (originalButton) {
        originalButton.classList.add('rotate');
      }
    });
  });
  