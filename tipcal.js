const bill_amount = document.getElementById('bill-amount');
const tip_percentage = document.getElementById('tip-percentage');
const total_payment = document.getElementById('total-payment');
const calculate = document.getElementById('calculate');

calculate.addEventListener('click', () => {
    if( bill_amount.value && tip_percentage.value ){
        const p = parseFloat(bill_amount.value);
        const r = parseFloat(tip_percentage.value);
        const total_bill = p + ((r*p)/100);
        total_payment.textContent = total_bill;
    }else{
        alert('Please fill all the fields');
    }
});
