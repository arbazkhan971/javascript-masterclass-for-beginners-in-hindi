const timer = document.querySelector('#timer');
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');

let active = false;
let [ss,mm,hh] = [0,0,0];
let timestr = null;
let intervalID;
function countUp() {
    ss++;
    if(ss > 99){
        ss = 0;
        mm++;
        if(mm > 59){
            mm = 0;
            hh++;
        }
    }
    ss = String(ss).padStart(2,'0');
    mm = String(mm).padStart(2,'0');
    hh = String(hh).padStart(2,'0');
    timer.textContent = `${hh}:${mm}:${ss}`;
}

start.addEventListener('click', () => {
    startTime = Date.now();
    active = active ? false : true;
    if (active) {
        start.textContent = 'Stop';
        intervalID = setInterval(countUp, 100);
    }else{
        start.textContent = 'Start';
        clearInterval(intervalID);
    }
});

reset.addEventListener('click', () => {
    timer.textContent = '00:00.00';
    [ss,mm,hh] = [0,0,0];
    active = false;
    start.textContent = 'Start';
    clearInterval(intervalID);
});