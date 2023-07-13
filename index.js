const timerEl = document.getElementById("timer");
const startEl = document.getElementById("start-button");
const stopEl = document.getElementById("stop-button");
const resetEl = document.getElementById("reset-button");

let interval;
let timeLeft = 1500;

startEl.addEventListener("click", stratTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

function stratTimer(){
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
    }, 1000);
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){  
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}
function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerEl.innerText = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

    if(timeLeft === 0){
        clearInterval(interval);
        timeLeft = 1500;
        alert("Time is up!");
    }
}