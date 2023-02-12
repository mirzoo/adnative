var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 2,
    focus  : 'center',
    width: '393em',
    fixedHeight: '38em',
    gap: '24px',
    autoplay: true,
    interval: number = 2000,
    pauseOnHover: true,
    speed: number = 1000,
    breakpoints: {
      425: {
        perPage: 1,

      },
    }
  } );

  splide.mount();