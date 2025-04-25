new Splide('#disc-slider', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    focus: 'center',
    gap: '1rem',
    padding: '20%',
    pagination: false,
    arrows: false,
    autoHeight: false,
    breakpoints: {
      768: {
        perPage: 1,
        padding: '10%',
      },
      480: {
        perPage: 1,
        padding: '5%',
      },
    },
  }).mount();
  