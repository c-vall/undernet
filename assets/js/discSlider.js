document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 2,
      spaceBetween: 15,
      slideShadows: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    // Prevent touch events from triggering the drag for CD elements
    document.querySelectorAll(".cdbutton").forEach((button) => {
      button.addEventListener("touchstart", (e) => {
        e.stopPropagation(); // Prevent touch event from affecting swiper
      });
    });
  
    // Handle custom click actions for the CD elements
    document.querySelectorAll(".cdbutton").forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior
        console.log(`Button ${button.id} clicked`);
        // Your custom action (like loading content or triggering media)
      });
    });
  });
  