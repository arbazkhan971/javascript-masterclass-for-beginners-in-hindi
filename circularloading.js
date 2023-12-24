function showProgress() {
    var progressContainer = document.getElementById("progress-container");
    var progressBar = document.getElementById("progress-bar");
    var progressFill = document.getElementById("progress-fill");
    var progressLabel = document.getElementById("progress-label");

    progressContainer.classList.remove("hidden");

    // Simulate progress
    var progress = 0;
    var interval = setInterval(function () {
        if (progress <= 100) {
            progressFill.style.width = progress + "%";
            progressFill.style.height = progress + "%";
            progressLabel.textContent = progress + "%";
            progress += 1;
        } else {
            clearInterval(interval);
            // Hide the progress bar after completion
            progressContainer.classList.add("hidden");
        }
    }, 30);
}
