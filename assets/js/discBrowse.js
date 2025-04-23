document.addEventListener('DOMContentLoaded', (event) => {
    const discContainer = document.querySelector('.disc-container');
    const discWrapper = document.querySelector('.disc-wrapper');
    const discButtons = document.querySelectorAll('.cdbutton');
  
    // Calculate the width of the disc wrapper
    const buttonWidth = discButtons[0].offsetWidth + 20; // Add margin
    discWrapper.style.width = `${buttonWidth * discButtons.length}px`;
  
    // Initialize the scroll position
    discContainer.scrollLeft = 0;
  
    // Optional: Add event listeners for smooth scrolling
    let isDown = false;
    let startX;
    let scrollLeft;
  
    discContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      discContainer.classList.add('active');
      startX = e.pageX - discContainer.offsetLeft;
      scrollLeft = discContainer.scrollLeft;
    });
  
    discContainer.addEventListener('mouseleave', () => {
      isDown = false;
      discContainer.classList.remove('active');
    });
  
    discContainer.addEventListener('mouseup', () => {
      isDown = false;
      discContainer.classList.remove('active');
    });
  
    discContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - discContainer.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scrolling speed
      discContainer.scrollLeft = scrollLeft - walk;
    });
  });