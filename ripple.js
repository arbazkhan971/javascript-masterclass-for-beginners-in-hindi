function createRipple(event) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    const rect = button.getBoundingClientRect();
    ripple.style.width = ripple.style.height = `${rect.width}px`;
    ripple.style.left = `${event.clientX - rect.left - rect.width/2}px`;
    ripple.style.top = `${event.clientY - rect.top - rect.width/2}px`;
    button.appendChild(ripple);
}
  
const button = document.querySelector(".ripple-btn");
button.addEventListener("click", createRipple);
