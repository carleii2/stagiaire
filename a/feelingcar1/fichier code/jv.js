document.addEventListener("DOMContentLoaded", () => {
  const carouselElement = document.querySelector('#carouselCameroun');
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000,
    ride: 'carousel'
  });

  // Pause au survol
  carouselElement.addEventListener('mouseenter', () => {
    carousel.pause();
  });

  // Reprise après survol
  carouselElement.addEventListener('mouseleave', () => {
    carousel.cycle();
  });
});
