# Digital Clock Pro

![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)

## 📖 Overview

A clean, responsive digital clock built with pure HTML, CSS, and JavaScript — no frameworks, no libraries. Features live time and date display, 12/24 hour format switching, and a smooth dark/light theme toggle.

## ✨ Features

- 🕐 Live time with seconds — updates every 1000ms via `setInterval`
- 📅 Full date display (weekday, month, day, year)
- 🔄 12 / 24 hour format toggle
- 🌙 Dark & Light theme toggle
- 📱 Responsive layout — works on all screen sizes

## Live Demo

Check out the live version of the clock here:  

[**View Digital Clock Pro Live**](https://sajjadali-fullstack.github.io/digital-clock-pro/)

---

## Demo

![Digital Clock Screenshot](https://github.com/sajjadali-fullstack/digital-clock-pro/blob/84d14e0315b6f612d52faf8575baa914252274dc/digital-clock-pro.png)

---


## 📁 Project Structure

```
digital-clock-pro/
├── index.html      # Markup and structure
├── style.css       # Dark/light theme, layout, clock styling
└── script.js       # Clock logic, format toggle, theme toggle
```

## 🔁 How It Works

```
Page loads
    └── updateClock() runs immediately
         └── setInterval calls updateClock() every 1000ms
              └── Reads current time via new Date()
                   ├── Formats hours based on is24Hour flag
                   ├── Updates #time, #ampm, #date elements
                   └── Repeats every second
```

## 🧠 Key Concepts

| Feature | Implementation |
|---------|---------------|
| Live clock | `setInterval(updateClock, 1000)` |
| 12/24 toggle | `is24Hour` boolean flag |
| AM/PM logic | `hours >= 12 ? "PM" : "AM"` |
| Zero padding | `String(hours).padStart(2, "0")` |
| Theme toggle | `classList.toggle("dark" / "light")` |

---

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="20"/> **HTML** <br> 
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="20"/> **CSS** <br>
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="20"/> **JavaScript**

---

## 👨‍💻 Author

**Sajjad Ali** 
