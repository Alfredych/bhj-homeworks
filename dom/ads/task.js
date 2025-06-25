document.addEventListener('DOMContentLoaded', function() {

  // Функция, загружающая в кейсы дата-атрибуты из массивов и запускающая ротатор
  function startRotator(rotator) {
    const dataColors = ['red', 'green', '#000', 'red', 'blue', 'grey'];
    const dataSpeeds = [1000, 2000, 1000, 1000, 500, 200];
    const cases = rotator.querySelectorAll('.rotator__case');
    let colorsIndex = 0;
    let speedsIndex = 0;
    let currentIndex = 0;

    for (let currentCase of cases) {
      currentCase.dataset.color = dataColors[colorsIndex];
      currentCase.dataset.speed = dataSpeeds[speedsIndex];
      colorsIndex = (colorsIndex + 1) % dataColors.length;
      speedsIndex = (speedsIndex + 1) % dataSpeeds.length;
    }
    
    // Функция ротации кейсов
    function rotate() {
      cases[currentIndex].classList.remove('rotator__case_active');
      currentIndex = (currentIndex + 1) % cases.length;
      
      const nextCase = cases[currentIndex];
      const speed = nextCase.dataset.speed || 1000;
      const color = nextCase.dataset.color || 'black';
      
      nextCase.classList.add('rotator__case_active');
      nextCase.style.color = color;
      
      clearInterval(rotator.intervalId);
      rotator.intervalId = setInterval(rotate, speed);
    }
    
    // Старт ротации
    const initialCase = cases[currentIndex];
    const initialSpeed = initialCase.dataset.speed || 1000;
    initialCase.style.color = initialCase.dataset.color || 'black';
    
    rotator.intervalId = setInterval(rotate, initialSpeed);
  }
  
  // Находим и запускаем все ротаторы в документе
  const rotators = document.querySelectorAll('.rotator');
  rotators.forEach(startRotator);
});

// Решение эксперта
/* В задаче с ротаторами рекламы вместо того, чтобы каждый раз запускать и останавливать интервал, можно использовать setTimeout и вызывать его рекурсивно.
Цвет и скорость можно получать напрямую из элементов. Зачем их дополнительно записывать в константы?
Задачку можно порефакторить следующим образом:

const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let delay = 1000;
let count = 0;

function changeRotatorCase() {
	rotatorCase.forEach((element) => element.classList.remove('rotator__case_active'));
	rotatorCase[count].classList.add('rotator__case_active');
	count = rotatorCase[count].nextElementSibling ? count + 1 : 0;
	delay = rotatorCase[count].getAttribute('data-speed');
	let color = rotatorCase[count].getAttribute('data-color');
	rotatorCase[count].setAttribute('style', `color: ${color}`);
	setTimeout(changeRotatorCase, delay);
}

setTimeout(changeRotatorCase, delay); */