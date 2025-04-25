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
  
   
    document.querySelectorAll(".cdbutton").forEach((button) => {
      button.addEventListener("touchstart", (e) => {
        e.stopPropagation(); 
      });
    });
  

    document.querySelectorAll(".cdbutton").forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior
        console.log(`Button ${button.id} clicked`);
  

        document.querySelectorAll(".cdbutton").forEach((btn) => {
          btn.classList.remove("spin");
        });
  
 
        button.classList.add("spin");
      });
    });
  });
  