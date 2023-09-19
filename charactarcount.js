const text = document.querySelector('#text');
const total_characters = document.querySelector('#total-characters');
const rem_characters = document.querySelector('#rem-characters');

let total = 0;
let rem = 50;

text.addEventListener('input', (event)=>{

    total = event.target.value.length;
    total_characters.innerHTML = total;
    rem = 50 - total;
    rem_characters.innerHTML = rem;
    if(rem === 0){
        text.disabled = true;
    }
    else{
        text.disabled = false;
    }

})