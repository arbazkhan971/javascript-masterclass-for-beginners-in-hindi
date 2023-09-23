const jokeBtn = document.querySelector('#jokeBtn');
const joke = document.querySelector('#joke');

jokeBtn.addEventListener('click', generateJoke);

async function generateJoke(){
    const response = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1',{
        headers: { 'X-Api-Key': 'APUFhJBLuaMPjcJswqx9Tw==5oDPPS7wbSQfev4D'},
    });
    const data = await response.json();
    console.log(data)
    joke.innerHTML = data[0]['joke'];
}