// Get the navigation menu and toggle button
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');

// Add event listener to the toggle button
menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation menu
    navbar.classList.toggle('active');
});
