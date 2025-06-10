const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let clickerCounter = 0;
let cookieSizeUp = true; // для отслеживания текущего размера картинки

cookie.addEventListener('click', function() {
  clickerCounter++;
  counter.textContent = clickerCounter;
  
  if (cookieSizeUp) {
      this.width = 175;
  } else {
      this.width = 200;
  }
  cookieSizeUp = !cookieSizeUp;
});