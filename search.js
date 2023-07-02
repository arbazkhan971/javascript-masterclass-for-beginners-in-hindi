const search = document.querySelector('.search');
const searchInput = document.querySelector('.input');
const searchBtn = document.querySelector('.btn');

searchBtn.addEventListener('click', () => {
    search.classList.toggle('active');
    // searchInput.focus();
});
