const agebutton = document.querySelector('.age-button');
const inputbtn = document.querySelector('.age-dob-input');
const result = document.querySelector('.age-result');

agebutton.addEventListener('click', () => {
    if ( inputbtn.value === '' ) {
        alert('Please enter your date of birth');
    }else{
        console.log(inputbtn.value);
        const dob = new Date(inputbtn.value);
        console.log("dob",dob);
        const now = new Date();
        console.log("now",now);

        const dob_year = dob.getFullYear();
        console.log("dob_year",dob_year);
        const now_year = now.getFullYear();
        console.log("now_year",now_year);

        let age = now_year - dob_year;
        console.log("age",age);

        result.innerHTML = `Your age is ${age}`;

    }
});