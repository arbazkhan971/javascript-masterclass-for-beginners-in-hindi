const count = document.querySelector("#count");
const add = document.querySelector("#add");
const subtract = document.querySelector("#minus");
const reset = document.querySelector("#reset");

let counter = 0;

add.addEventListener("click", () => {
    counter++;
    count.textContent = counter;
});

subtract.addEventListener("click", () => {
    counter--;
    count.textContent = counter;
});

reset.addEventListener("click", () => {
    counter = 0;
    count.textContent = counter;
});