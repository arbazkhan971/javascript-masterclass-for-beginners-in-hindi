const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');


quoteBtn.addEventListener('click', generateQuote);

async function generateQuote(){
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    console.log(data)
    quote.innerHTML = '"' + data['content'] + '"';
    author.innerHTML = data['author'];
}