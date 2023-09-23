const input = document.querySelector('#input');
const searchBtn = document.querySelector('#searchBtn');
const definition = document.querySelector('#definition');


searchBtn.addEventListener('click', generateDefinition);


async function generateDefinition(){
    let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
    console.log(res);
    res = await res.json();
    console.log(res[0]["meanings"][0]["definitions"][0]["definition"]);
    definition.innerHTML = "Meaning: " + res[0]["meanings"][0]["definitions"][0]["definition"];
}