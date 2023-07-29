const output = document.querySelector('.output');
const btn = document.querySelectorAll('button');

console.log("btn",btn)
console.log("output",output)
let str = '';
btn.forEach((button) => {

    button.addEventListener('click', (e) => {
        if ( e.target.innerHTML === 'AC') {
            str = '';
            output.value = str;
        }else if ( e.target.innerHTML === '=') {
            str = eval(str);
            output.value = str;
        }else if ( e.target.innerHTML === 'DEL') {
            str = str.slice(0, -1);
            output.value = str;
        }else{
            str = str + e.target.innerHTML;
            output.value = str;
        }

    });

});