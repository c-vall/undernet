document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cdbutton');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove the 'rotate' class from all buttons
            buttons.forEach(btn => btn.classList.remove('rotate'));
            // Add the 'rotate' class to the clicked button
            this.classList.add('rotate');
        });
    });
});
