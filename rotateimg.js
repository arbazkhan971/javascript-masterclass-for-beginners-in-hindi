const API_KEY = 'OGnTYycNIsDscUJYpwqBjKjD3aXEdzlfLc_kOWBiC6o';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const imageContainer = document.getElementById('imageContainer');

searchButton.addEventListener('click', searchImages);

async function searchImages() {
    const query = searchInput.value;

    if (!query) {
        alert('Please enter a search term.');
        return;
    }

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`);
        const data = await response.json();
        console.log(data)
        displayImages(data.results);
    } catch (error) {
        console.error(error);
        alert('An error occurred while fetching images.');
    }
}

function displayImages(images) {
    imageContainer.innerHTML = '';

    images.forEach((image) => {
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');

        const img = document.createElement('img');
        img.src = image.urls.regular;

        imageCard.appendChild(img);
        imageContainer.appendChild(imageCard);
    });
}
