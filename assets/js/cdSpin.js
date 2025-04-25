document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('#slider');

    slider.addEventListener('click', function(event) {
        const button = event.target.closest('.cdbutton');
        if (!button) return;

        // Remove 'rotate' from all buttons (including clones)
        const allButtons = slider.querySelectorAll('.cdbutton');
        allButtons.forEach(btn => btn.classList.remove('rotate'));

        // Add 'rotate' to the clicked one
        button.classList.add('rotate');
    });
});
