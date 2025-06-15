const menu = document.querySelector('.dropdown');
const value = menu.querySelector('.dropdown__value');
const list = menu.querySelector('.dropdown__list');

menu.addEventListener('click', function(event) {

  if (event.target === value) {
    list.classList.toggle('dropdown__list_active');
  }

  const clickedItem = event.target.closest('.dropdown__item');
  if (clickedItem) {
    value.textContent = clickedItem.textContent;
    list.classList.remove('dropdown__list_active');
    event.preventDefault();
  }

});