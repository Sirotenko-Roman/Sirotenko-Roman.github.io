window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav_menu'),
    menuItem = document.querySelectorAll('.nav_link'),
    hamburher = document.querySelector('.hamburher');

    hamburher.addEventListener('click', () => {
        hamburher.classList.toggle('hamburher_active');
        menu.classList.toggle('nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburher_active');
            menu.classList.toggle('nav_active');
        })
    })
})