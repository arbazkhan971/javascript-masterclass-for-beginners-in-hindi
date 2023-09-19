const password = document.getElementById('password');
const output = document.getElementById('output');


password.addEventListener('input', function() {
    let pass = password.value;
    // add more than 5 conditions
    if(pass.length < 5) {
        output.innerHTML = 'Password must be at least 5 characters';
        output.style.color = 'red';
    }else if(pass.length > 12) {
        output.innerHTML = 'Password must be less than 12 characters';
        output.style.color = 'red';
    }else if(pass.search(/[0-9]/) == -1) {
        output.innerHTML = 'Password must contain a number';
        output.style.color = 'red';
    }else if(pass.search(/[a-z]/) == -1) {
        output.innerHTML = 'Password must contain a lowercase letter';
        output.style.color = 'red';
    }else if(pass.search(/[A-Z]/) == -1) {
        output.innerHTML = 'Password must contain an uppercase letter';
        output.style.color = 'red';
    }else if(pass.search(/[!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) == -1) {
        output.innerHTML = 'Password must contain a special character';
        output.style.color = 'red';
    }else{
        output.innerHTML = 'Password is valid';
        output.style.color = 'green';
    }
});