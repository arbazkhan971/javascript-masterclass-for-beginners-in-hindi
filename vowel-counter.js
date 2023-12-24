const count = document.querySelector(".count")
const text = document.querySelector("#text")
const output = document.querySelector("#output")


output.addEventListener("click",()=>{

    console.log(text.value)
    let c = 0;
    for(let j=0;j < text.value.length; j++){
        console.log(text.value[j])
        if( text.value[j] === "a" || text.value[j] === "e" || text.value[j] === "o"|| text.value[j] === "i" || text.value[j] === "u" || text.value[j] === "A" || text.value[j] === "E" || text.value[j] === "I" || text.value[j] === "O" || text.value[j] === "U"){
            c++;
        }
    }
    count.textContent = `Total vowel count is ${c}`

})
