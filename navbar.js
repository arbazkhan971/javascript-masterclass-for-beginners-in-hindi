// Get all the menu items
const menuItems = document.querySelectorAll('.nav-list li');

// Add event listeners to each menu item
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Show dropdown menu
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'block';
        }
    });

    item.addEventListener('mouseleave', () => {
        // Hide dropdown menu
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    });
});
