function timerCounter(startTime, delay) {
  const elementTimer = document.getElementById("timer");
  let timer = parseInt(startTime);
  const timerId = setInterval(() => {
    timer--;
    elementTimer.textContent = timer;

    if(timer === 0) {
      alert("Вы победили в конкурсе");
      clearInterval(timerId);
    }
  }, delay);  
}

const startTime = document.getElementById("timer").textContent;
timerCounter(startTime, 1000);