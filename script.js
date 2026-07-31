let timer;
let totalSeconds = 1500;
let isRunning = false;
let isFocus = true;
let sessionCount = localStorage.getItem("sessions") || 0;

document.getElementById("sessionCount").innerText = sessionCount;

function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    document.getElementById("timer").innerText =
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            document.getElementById("alarmSound").play();
            switchMode();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = isFocus ? 1500 : 300;
    updateDisplay();
}

function switchMode() {
    if (isFocus) {
        sessionCount++;
        localStorage.setItem("sessions", sessionCount);
        document.getElementById("sessionCount").innerText = sessionCount;

        isFocus = false;
        totalSeconds = 300;
        document.getElementById("modeLabel").innerText = "Break Time ☕";
    } else {
        isFocus = true;
        totalSeconds = 1500;
        document.getElementById("modeLabel").innerText = "Focus Time 🔥";
    }
    updateDisplay();
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

updateDisplay();