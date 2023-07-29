const left = document.querySelector('#left');
const right = document.querySelector('#right');
const img = document.querySelector('.image-container img');

let id = 0;

right.addEventListener('click', function () {
    console.log('right');
    console.log(img.style.transform);
    // img.style.transform = 'translateX(-100%)';
    id++;
    img.style.transform = `translateX(-${id * 500})`;
});