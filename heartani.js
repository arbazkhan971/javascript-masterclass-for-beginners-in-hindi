const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
   console.log(event)
    const heart = document.createElement("span");
    const x = event.offsetX;
    const y = event.offsetY;
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    const size = Math.random() * 100;
    heart.style.width = 20 + size + "px";
    heart.style.height = 20 + size + "px";
    body.appendChild(heart); 
    setTimeout(() => {
        heart.remove();
    }, 3000);
});