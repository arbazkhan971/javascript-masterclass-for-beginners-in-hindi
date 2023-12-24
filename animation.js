const animation = document.querySelector('.animation');
const text = "Subscribe to procode on youtube for more videos";
let index = 0;
let speed = 50;
function animateText(){
    animation.textContent = text.substring(0, index);
    index++;
    if( index > text.length){
        index = 0;
    }
    setTimeout(animateText, speed);
}

animateText()