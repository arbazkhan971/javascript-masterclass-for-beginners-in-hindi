const text = document.querySelector('.text');
const input = document.querySelector('.speed');
let speed = 3000/input.value;
const animationTxt = "I love programming❤️";
input.addEventListener('input', (e) => {
    speed = 3000/e.target.value;
})

let index = 0;
function writeText() {
    console.log("index",index);
    console.log("animationTxt",animationTxt.length)
    text.innerHTML = animationTxt.slice(0, index);
    index++;
    if (index > animationTxt.length) {
        index = 0;
    }
    setInterval(writeText, speed);
}

writeText();