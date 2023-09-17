const inputWeight = document.querySelector('#pounds');
const convert  = document.querySelector('#convert');
const kg = document.querySelector('#kg');

convert.addEventListener('click', function() {
    if( inputWeight.value === '') {
        alert('Please enter a number');
        return;
    }else{
        let pounds = inputWeight.value;
        let kilograms = pounds / 2.2046;
        kg.innerHTML = kilograms.toFixed(2);
    }

});