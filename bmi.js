const heigth = document.querySelector('#height');
const weight = document.querySelector('#weight');
const calculate = document.querySelector('#calculate');
const result = document.querySelector('#result');
const statusBMI = document.querySelector('#status');

calculate.addEventListener('click', () => {

    if( heigth.value == '' || weight.value == '' ) {
        alert('Please enter your height and weight.');
        return;
    }else{
        const bmi = weight.value / ((heigth.value / 100) * (heigth.value / 100));
        result.textContent = bmi.toFixed(2);

        if( bmi < 18.5 ) {
            statusBMI.textContent = 'Underweight';
        }else if( bmi >= 18.5 && bmi <= 24.9 ) {
            statusBMI.textContent = 'Normal';
        }else if( bmi >= 25 && bmi <= 29.9 ) {
            statusBMI.textContent = 'Overweight';
        }else if( bmi >= 30 ) {
            statusBMI.textContent = 'Obese';
        }
    }

});