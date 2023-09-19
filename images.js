const left = document.querySelector(".left");
const right = document.querySelector(".right");
const img_container = document.querySelector(".img-container");

let count = 0;
let imageWidth = 500;

left.addEventListener("click", () => {
    if( count > 0){
        count--;
        img_container.style.transform = `translateX(-${count * imageWidth}px)`;
    }else if(count === 0) {
        count = 7;
        img_container.style.transform = `translateX(-${count * imageWidth}px)`;
    }
});

right.addEventListener("click", () => {
    if (count < 7){
        count++;
        img_container.style.transform = `translateX(-${count * imageWidth}px)`;
    }else if( count === 7){
        count = 0;
        img_container.style.transform = `translateX(-${count * imageWidth}px)`;
    }
});