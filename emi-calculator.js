const loan_amount = document.getElementById('loan-amount');
const interest_rate = document.getElementById('interest-rate');
const loan_tenure = document.getElementById('month-to-pay');
const monthly_payment = document.getElementById('monthly-payment');
const calculate = document.getElementById('calculate');

calculate.addEventListener('click', () => {
    if( loan_amount.value && interest_rate.value && loan_tenure.value){
        const p = loan_amount.value;
        const r = interest_rate.value / 1200;
        const n = loan_tenure.value;

        const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

        monthly_payment.value = emi.toFixed(2);
        monthly_payment.textContent = emi.toFixed(2);
    }else{
        alert('Please fill all the fields');
    }
});
