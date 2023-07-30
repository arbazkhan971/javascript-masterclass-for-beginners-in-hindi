const output = document.querySelector('.output');
const btn = document.querySelectorAll('button');

console.log("btn",btn)
console.log("output",output)

let str = '';
btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        // str = str + e.target.textContent.trim();
        // output.value = str; 
        console.log(e.target.textContent)
        console.log(e.target.textContent.trim())
        if ( e.target.textContent.trim() === 'AC') {
            str = '';
            output.value = str;
        }else if( e.target.textContent.trim() === 'DEL'){
            str = str.substring(0, str.length - 1);
            output.value = str;
        }else if( e.target.textContent.trim() === '='){
            str = eval(str);
            output.value = str;
        }
        else{
            str = str + e.target.textContent.trim();
            output.value = str;
        }

    });
});