const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 7,
    arrows: false,
    pagination: false,
    gap: 32,
    autoScroll: {
        speed: 1,
    },
});

splide.mount(window.splide.Extensions);

