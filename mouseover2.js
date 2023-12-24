const xpos = document.querySelector('#xpos');
const ypos = document.querySelector('#ypos');

window.addEventListener('mouseover', (event)=>{

    console.log(event);
    console.log(event.clientX);
    console.log(event.clientY);
    xpos.innerHTML = event.clientX;
    ypos.innerHTML = event.clientY;
})