let timer = parseInt(document.getElementById("timer").textContent);

function timerCounter(timer, delay) {
  const timerId = setInterval(() => {
    timer--;
    document.getElementById("timer").textContent = timer;

    if(timer === 0) {
      alert("Вы победили в конкурсе");
      clearInterval(timerId);
    }
  }, delay);  
}

const timerId = timerCounter(timer, 1000);