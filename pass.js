const upper = document.querySelector('#include-uppercase');
const lower = document.querySelector('#include-lowercase');
const number = document.querySelector('#include-numbers');
const symbol = document.querySelector('#include-symbols');
const lengthinp = document.querySelector('#password-length');
const generate = document.querySelector('.generate-password');
const copy = document.querySelector('.copy');
const password = document.querySelector('.password');
console.log("upper",upper.checked)
console.log("lower",lower.checked)
console.log("number",number.checked)
console.log("symbol",symbol.checked)
console.log("length",lengthinp.value)
console.log("generate",generate)
console.log("copy",copy)

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';
function generatePassword(upper,lower,number,symbol,lengthinp){
    console.log("upper",upper)
    console.log("lower",lower)
    console.log("number",number)
    console.log("symbol",symbol)
    console.log("lengthinp",lengthinp)

    let str = '';
    if(upper){
        str = str + upperCaseLetters;
    }
    if(lower){
        str = str + lowerCaseLetters;
    }
    if(number){
        str = str + numbers;
    }
    if(symbol){
        str = str + symbols;
    }
    console.log("str",str)
    // console.log(Math.random(str.length)*10)
    // console.log(Math.floor(Math.random(str.length)*10))
    // console.log(Math.floor(Math.random()*10))
    // console.log(str[Math.floor(Math.random()*10)])
    let passwordLength = lengthinp;
    let password = '';
    for(let i = 0; i < passwordLength; i++){
        password = password + str[Math.floor(Math.random()*str.length)];
    }
    console.log("password",password)
    // document.querySelector('.password').value = password;
    return password;
}

// generatePassword();
generate.addEventListener('click', () => {
    const lower1 = document.querySelector('#include-lowercase').checked;
    const upper1 = document.querySelector('#include-uppercase').checked;
    const number1 = document.querySelector('#include-numbers').checked;
    const symbol1 = document.querySelector('#include-symbols').checked;
    const length1 = document.querySelector('#password-length').value;
    console.log("lower1",lower1)
    console.log("upper1",upper1)
    console.log("number1",number1)
    console.log("symbol1",symbol1)
    console.log("length1",length1)
    console.log(generatePassword(upper1,lower1,number1,symbol1,length1))
    password.value = generatePassword(upper1,lower1,number1,symbol1,length1)
    // password.value = generatePassword();
})


copy.addEventListener('click', () => {
    const newelement = document.createElement('textarea');
    newelement.value = password.value;
    document.body.appendChild(newelement);
    newelement.select();
    document.execCommand('copy');
    alert('Password Copied');
    newelement.remove();
});