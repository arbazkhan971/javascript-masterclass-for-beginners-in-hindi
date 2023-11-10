document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prev-month");
    const nextButton = document.getElementById("next-month");
    const currentMonth = document.getElementById("current-month");
    const calendarBody = document.getElementById("calendar-body");

    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonthIndex = date.getMonth();

    function generateCalendar(year, month) {
        calendarBody.innerHTML = "";
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startingDay = firstDay.getDay(); // Get the day of the week (0-6) for the first day of the month
        console.log("startingDay: " + startingDay)
        console.log("firstDay: " + firstDay)
        console.log("lastDay: " + lastDay)
        
        currentMonth.textContent = `${firstDay.toLocaleString("default", {
            month: "long"
        })} ${year}`;

        // Create blank cells for days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
            const cell = document.createElement("td");
            calendarBody.appendChild(cell);
        }

        let currentDate = new Date(firstDay);
        while (currentDate <= lastDay) {
            const cell = document.createElement("td");
            cell.textContent = currentDate.getDate();
            calendarBody.appendChild(cell);
            currentDate.setDate(currentDate.getDate() + 1);

            if (currentDate.getDay() === 0) {
                calendarBody.appendChild(document.createElement("tr"));
            }
        }
    }

    generateCalendar(currentYear, currentMonthIndex);

    prevButton.addEventListener("click", function () {
        currentMonthIndex--;
        if (currentMonthIndex < 0) {
            currentYear--;
            currentMonthIndex = 11;
        }
        generateCalendar(currentYear, currentMonthIndex);
    });

    nextButton.addEventListener("click", function () {
        currentMonthIndex++;
        if (currentMonthIndex > 11) {
            currentYear++;
            currentMonthIndex = 0;
        }
        generateCalendar(currentYear, currentMonthIndex);
    });
});
