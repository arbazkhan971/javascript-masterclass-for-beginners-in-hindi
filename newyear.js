const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

const countdownContainer = document.querySelector('.countdown');
const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

function updateCountdown() {
    const currentTime = new Date();
    const nextYearDate = new Date(nextYear, 0, 1); // January 1st of next year
    const timeDifference = nextYearDate - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysDisplay.textContent = days.toString().padStart(2, '0');
    hoursDisplay.textContent = hours.toString().padStart(2, '0');
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

// Initial update
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);
