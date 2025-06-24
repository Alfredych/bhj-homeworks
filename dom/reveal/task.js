// Функция проверки "видимости" элемента в окне браузера
let isInViewport = function(element) {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;
  return elementTop < viewportHeight && elementBottom > 0 ? true : false;
};

// Функция, меняющая класс элемента, находящегося в поле "видимости" окна браузера
function checkReveals() {
  const reveals = document.querySelectorAll('.reveal');
  
  for (let reveal of reveals) {
    let revealInViewport = isInViewport(reveal);
    if (revealInViewport) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  }
}

checkReveals();
window.addEventListener('scroll', checkReveals);