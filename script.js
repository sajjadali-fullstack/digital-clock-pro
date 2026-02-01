// VARIABLES
let is24Hour = false;

// ELEMENTS
const timeEl = document.getElementById("time");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const formatBtn = document.getElementById("formatBtn");
const themeBtn = document.getElementById("themeBtn");

// UPDATE CLOCK FUNCTION
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let ampm = "AM";

    if (!is24Hour) {
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }

    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    timeEl.textContent = `${String(hours).padStart(2,"0")}:${minutes}:${seconds}`;
    ampmEl.textContent = is24Hour ? "" : ampm;

    const dateStr = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    dateEl.textContent = dateStr;
}

// TOGGLE 12/24 HOUR FORMAT
formatBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;
});

// TOGGLE THEME
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});

// START CLOCK
setInterval(updateClock, 1000);
updateClock();
