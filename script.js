let timerInterval;
let countdown = 10;
let clickCount = 0;
let isRunning = false;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const clickButton = document.getElementById('clickButton');
const timerDisplay = document.getElementById('timer');
const countDisplay = document.getElementById('clickCount');

// Start Button
startButton.addEventListener('click', startGame);

// Stop Button
stopButton.addEventListener('click', stopGame);

// Click Button
clickButton.addEventListener('click', incrementCount);

// Function to start the game
function startGame() {
    isRunning = true;
    clickCount = 0;
    countdown = 10;
    countDisplay.textContent = clickCount;
    timerDisplay.textContent = countdown;
    
    startButton.disabled = true;
    stopButton.disabled = false;
    clickButton.disabled = false;

    timerInterval = setInterval(updateTimer, 1000);
}

// Function to stop the game
function stopGame() {
    clearInterval(timerInterval);
    isRunning = false;
    
    startButton.disabled = false;
    stopButton.disabled = true;
    clickButton.disabled = true;

    alert(`Game Over! You clicked ${clickCount} times.`);
}

// Function to update the timer
function updateTimer() {
    countdown--;
    timerDisplay.textContent = countdown;
    
    if (countdown <= 0) {
        clearInterval(timerInterval);
        stopGame();
    }
}

// Function to increment the click count
function incrementCount() {
    if (isRunning) {
        clickCount++;
        countDisplay.textContent = clickCount;
    }
}
