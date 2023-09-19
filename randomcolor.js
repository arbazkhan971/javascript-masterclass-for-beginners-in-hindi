const container = document.querySelector('.container');

// 30. Random Color Generator
for(let i = 0; i < 30; i++){
    const box = document.createElement('div');
    box.classList.add('color-container');
    const colorcode = getRandomColor();
    box.style.backgroundColor = getRandomColor();
    box.innerText = getRandomColor();
    container.appendChild(box);
}


function getRandomColor(){
    const hexcode = '0123456789abcdef';
    let color = '#';
    for(let j = 0; j < 6; j++){
        color += hexcode[Math.floor(Math.random()*16)] 
    }
    return color;
}

console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());
