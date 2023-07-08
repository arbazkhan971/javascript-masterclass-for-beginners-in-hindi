const search = document.querySelector('.search');
const searchInput = document.querySelector('.input');
const searchBtn = document.querySelector('.button');

searchBtn.addEventListener('click', () => {
    // if(search.classList.contains('active')) {
    //     search.classList.remove('active');
    // }else{
    //     search.classList.add('active');
    // }
    search.classList.toggle('active');

})  