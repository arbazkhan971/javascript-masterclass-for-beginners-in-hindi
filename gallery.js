const imgContainer = document.querySelector('.img-container');
const count = document.querySelector('#count');
const find = document.querySelector('#find');
const errorMes = document.querySelector('.errorMes');

find.addEventListener('click', () => {
    if(count.value > 20 || count.value < 0){
        errorMes.innerHTML = 'Please enter a number between 0 and 20';
    }else{
        errorMes.innerHTML = '';
        imgContainer.innerHTML = '';
        for(let i = 0; i < count.value; i++){
            imgContainer.innerHTML += `<img src="https://picsum.photos/500/300?random=${getRandomNumber(0,20)}" alt="random image">`;
        }
    }
});

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}