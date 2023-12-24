document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading progress
    const progressbar = document.querySelector(".loading-bar")
    const percentageElement = document.getElementById("percentage");
    let progress = 0
    let interval = setInterval(()=>{
        if (progress < 100){
            progress++;
            progressbar.style.width = `${progress}%`;
            percentageElement.textContent = `${progress}%`
        }else {
            clearInterval(interval)
        }
    },30)
});


