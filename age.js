const dateinput = document.querySelector('.date-input');
const dobbtn = document.querySelector('.dob-btn');
const result = document.querySelector('.result');

function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const now = new Date();
  
    let age = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    const dayDiff = now.getDate() - dob.getDate();
  
    // // Adjust the age if the birthday has not yet occurred this year
    // if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    //   age--;
    // }
  
    return age;
  }
  
dobbtn.addEventListener('click', () => {
    result.innerHTML = `Your age is ${calculateAge(dateinput.value)}`;
});