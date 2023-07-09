const counters = document.querySelectorAll('.counter');

console.log(counters);
counters.forEach((counter) => {
    console.log(counter.innerHTML);
    counter.innerHTML = '0';
    let target = counter.getAttribute('data-target');
    console.log(target);
    let inc = target / 500;
    console.log(inc)
    let current = 0;
    const updateCounter = () => {
        if( current < target){
            current += inc;
            counter.innerHTML = current;
            setTimeout(updateCounter, 1);
        }else{
            counter.innerHTML = target;
        }
    }
    updateCounter();
})