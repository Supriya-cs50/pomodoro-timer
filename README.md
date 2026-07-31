# Pomodoro Timer

A responsive Pomodoro Timer built using HTML, CSS, and JavaScript. The application helps users improve productivity by following the Pomodoro Technique, alternating between focused work sessions and short breaks.

---

## Live Demo

https://YOUR-VERCEL-LINK.vercel.app

---

## Screenshot

> Add a screenshot of the application here after deployment.

---

## Features

- 25-minute focus timer
- 5-minute break timer
- Start, Pause, and Reset controls
- Dark mode toggle
- Alarm notification when a session ends
- Session counter
- Session count stored using Local Storage
- Responsive design

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Local Storage API

---

## Project Structure

```text
pomodoro/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/pomodoro.git
```

### Run the project

Open `index.html` in any modern web browser.

Alternatively, use VS Code Live Server for development.

---

## How It Works

### Focus Session

- Starts a 25-minute countdown.
- Counts down every second.
- Automatically switches to break mode when completed.

### Break Session

- Starts a 5-minute countdown.
- Automatically switches back to focus mode after completion.

### Session Counter

- Increments after every completed focus session.
- Stored using Local Storage.
- Persists across browser refreshes.

### Dark Mode

- Allows users to switch between light and dark themes.

---

## Browser Compatibility

Tested on:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

---

## Future Improvements

Possible enhancements include:

- Custom focus and break durations
- Circular progress indicator
- Multiple alarm sounds
- Desktop notifications
- Keyboard shortcuts
- Daily productivity statistics
- Task management integration
- Automatic theme persistence

---

## Learning Objectives

This project demonstrates:

- DOM manipulation
- JavaScript timers (`setInterval`)
- Event handling
- Local Storage
- Responsive web design
- Theme switching
- State management

---

## Author

Supriya B S