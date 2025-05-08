var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true, 
  centeredSlides: true,
  speed: 600, // Biar animasi lebih halus
  autoplay: {
      delay: 2500, // Percepat autoplay biar terasa smooth
      disableOnInteraction: false,
  },
  loopAdditionalSlides:0, // Sesuaikan dengan jumlah total card
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});