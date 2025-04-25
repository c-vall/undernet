document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
      centeredSlides: true,
      loop: false,
      slideShadows: false,
      mousewheel: true,
      keyboard: true,
    });
  
    document.querySelectorAll(".cdbutton").forEach((button) => {
      button.addEventListener("touchstart", (e) => {
        e.stopPropagation();
      });
    });
  
    document.querySelectorAll(".cdbutton").forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(`Button ${button.id} clicked`);
  
        document.querySelectorAll(".cdbutton").forEach((btn) => {
          btn.classList.remove("spin");
        });
  
        button.classList.add("spin");
      });
    });
  });
  