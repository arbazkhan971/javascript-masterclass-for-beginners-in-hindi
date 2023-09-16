const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer__time = document.getElementsByClassName('timer__time');

let minutes = 25;
let seconds = 0;
let timer;
start.addEventListener('click', () => {
    timer = setInterval(() => {
        if( seconds == 0 ) {
            if( minutes == 0 ) {
                clearInterval(timer);
                return;
            }else{
                minutes--;
                seconds = 59;
            }
        }else{
            seconds--;
        }
        timer__time[0].textContent = minutes + ':' + seconds;
    }, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(timer);
});

reset.addEventListener('click', () => {
    clearInterval(timer);
    minutes= 25;
    seconds = 0;
    timer__time[0].textContent = minutes + ':0' + seconds;
});
