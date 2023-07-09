const text = document.querySelector('.text');
const input = document.querySelector('#speed');
const value = "I love programming❤️";
console.log(input.value);
let index = 0;
let speed = 300 / input.value;

function writeText() {
    text.innerHTML = value.slice(0, index);
    index++;
    if (index > value.length) {
        index = 0;
    }
    setTimeout(writeText, speed);
}

writeText();
input.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
})