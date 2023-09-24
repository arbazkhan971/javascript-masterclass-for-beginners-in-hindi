const calcius = document.querySelector('#calcius');
const fahrenheit = document.querySelector('#fahrenheit');
const kelvin = document.querySelector('#kelvin');

calcius.addEventListener('input', calciusToFahrenheitAndKelvin);
fahrenheit.addEventListener('input', fahrenheitToCalciusAndKelvin);
kelvin.addEventListener('input', kelvinToCalciusAndFahrenheit);

function calciusToFahrenheitAndKelvin(){
    let cTemp = parseFloat(calcius.value);
    let fTemp = (cTemp * (9/5)) + 32;
    let kTemp = cTemp + 273.15;
    fahrenheit.value = fTemp;
    kelvin.value = kTemp;
}

function fahrenheitToCalciusAndKelvin(){
    let fTemp = parseFloat(fahrenheit.value);
    let cTemp = (fTemp - 32) * (5/9);
    let kTemp = (fTemp + 459.67) * (5/9);
    calcius.value = cTemp;
    kelvin.value = kTemp;
}

function kelvinToCalciusAndFahrenheit(){
    let kTemp = parseFloat(kelvin.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp * (9/5)) - 459.67;
    calcius.value = cTemp;
    fahrenheit.value = fTemp;
}