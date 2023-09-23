const API_KEY = 'OGnTYycNIsDscUJYpwqBjKjD3aXEdzlfLc_kOWBiC6o';
const searchButton = document.getElementById('searchButton');
const imageContainer = document.querySelector('.imgContainer');
searchButton.addEventListener('click', searchImages);
const randomFruitName = [
    'apple',
    'banana',
    'orange',
    'grape',
    'strawberry',
    'blueberry',
    'mango',
    'watermelon',
    'pineapple',
    'cherry',
    'pear',
    'kiwi',
    'lemon',
    'lime',
    'peach',
    'plum',
    'coconut',
    'avocado',
]

async function searchImages() {
    try {
        // Generate a random index within the array's length
        const randomIndex = Math.floor(Math.random() * randomFruitName.length);
        // Get the randomly chosen fruit
        const randomFruit = randomFruitName[randomIndex];
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${randomFruit}&client_id=${API_KEY}`);
        const data = await response.json();
        const img = document.createElement('img');
        img.src = data.results[0].urls.regular;
        console.log(data.results[0].urls.regular);
        console.log(img);
        
        // Append the img element to the imageContainer
        imageContainer.innerHTML = ''; // Clear previous content
        imageContainer.appendChild(img);
    } catch (error) {
        console.error(error);
        alert('An error occurred while fetching images.');
    }
}
