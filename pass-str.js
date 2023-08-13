const passwordval = document.getElementById('password');
const result = document.getElementById('result');

password.addEventListener('onChange', function(e) {
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const digitCriteria = /\d/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const commonWordCriteria = !/(password|123456|qwerty)/i.test(password);

    if (lengthCriteria && uppercaseCriteria && lowercaseCriteria && digitCriteria && specialCharCriteria && commonWordCriteria) {
        result.textContent = "Password strength: Strong";
    } else if ((lengthCriteria && (uppercaseCriteria || lowercaseCriteria)) && digitCriteria && specialCharCriteria) {
        result.textContent = "Password strength: Moderate";
    } else {
        result.textContent = "Password strength: Weak";
    }
});