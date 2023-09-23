const click = document.querySelector('#click');
const emoji_name = document.querySelector('.emoji_name');

click.addEventListener('click', async ()=>{
    const response = await fetch('https://emoji-api.com/emojis?access_key=8bd7c2327a663e6d1b92a245cc9b14a0b56f7bf6');
    console.log(response); 
    let data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomEmoji = data[randomIndex];
    emoji_name.innerHTML = randomEmoji?.unicodeName;
    click.innerHTML = randomEmoji.character;
});
