const score = document.querySelector('#score');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const inp = document.querySelector('#answer');
const btn = document.querySelector('#submit');

btn.addEventListener('click', () => {
    if (inp.value == num1.textContent * num2.textContent) {
        score.textContent = Number(score.textContent) + 1;
        inp.value = '';
        num1.textContent = Math.floor(Math.random() * 10);
        num2.textContent = Math.floor(Math.random() * 10);
    } else {
        inp.value = '';
        num1.textContent = Math.floor(Math.random() * 10);
        num2.textContent = Math.floor(Math.random() * 10);    
    }
});