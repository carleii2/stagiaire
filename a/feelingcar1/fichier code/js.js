// Tu peux ajouter ici des effets ou des interactions personnalisées
document.addEventListener("DOMContentLoaded", () => {
  console.log("Slider des destinations chargé !");
});
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector('#carouselCameroun');
  const carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000, // 3 secondes
    ride: 'carousel',
    pause: false // ne s'arrête pas au survol
  });
});
