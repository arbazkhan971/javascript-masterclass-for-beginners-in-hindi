const inputField = document.querySelector("#pass-check-input");

inputField.addEventListener("input", function() {
    const field = inputField.value;
    const output = document.querySelector("#pass-check-output");
    if(field.length < 5) {
        output.innerHTML = 'Password must be at least 5 characters';
        output.style.color = 'red';
    }else if(field.length > 12) {
        output.innerHTML = 'Password must be less than 12 characters';
        output.style.color = 'red';
    }
    else if(field.search(/[0-9]/) == -1) {
        output.innerHTML = 'Password must contain a number';
        output.style.color = 'red';
    }
    else if(field.search(/[a-z]/) == -1) {
        output.innerHTML = 'Password must contain a lowercase letter';
        output.style.color = 'red';
    }
    else if(field.search(/[A-Z]/) == -1) {
        output.innerHTML = 'Password must contain an uppercase letter';
        output.style.color = 'red';
    }
    else if(field.search(/[!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) == -1) {
        output.innerHTML = 'Password must contain a special character';
        output.style.color = 'red';
    }
    else{
        output.innerHTML = 'Password is valid';
        output.style.color = 'green';
    }
});