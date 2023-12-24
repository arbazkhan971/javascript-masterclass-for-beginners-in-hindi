const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

const imgContainer = document.querySelector(".img-slide")
console.log(imgContainer)

let count = 0;
let imgWidth = 500;
prev.addEventListener("click",()=>{
    console.log("clicked prev")
    if (count > 0){
        count--;
        imgContainer.style.transform = `translateX(-${count*imgWidth}px)`
    }

})

next.addEventListener("click",()=>{
    console.log("clicked next")
    if (count < 4){
        count++;
        imgContainer.style.transform = `translateX(-${count*imgWidth}px)`
    }})