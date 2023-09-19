const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const imgContainer = document.querySelector('.img-container');

let count = 0; // Start with the first image
const imageWidth = 500; // Width of each image in pixels

next.addEventListener('click', () => {
    if (count < 4) { // Assuming there are 5 images (0 to 4)
        count++;
        imgContainer.style.transform = `translateX(-${count * imageWidth}px)`;
    }
});

prev.addEventListener('click', () => {
    if (count > 0) {
        count--;
        imgContainer.style.transform = `translateX(-${count * imageWidth}px)`;
    }
});
