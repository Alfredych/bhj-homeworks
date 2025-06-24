document.addEventListener('DOMContentLoaded', function() {
  
  // Управление размером шрифта
  document.querySelectorAll('.font-size').forEach(elem => {
    elem.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelectorAll('.font-size').forEach(item => item.classList.remove('font-size_active'));
      this.classList.add('font-size_active');
      
      const currentSize = this.dataset.size;

      const book = document.querySelector('.book');
      book.classList.remove('font-size_small', 'font-size_big');
      book.classList.add(`font-size_${currentSize}`);
    });
  });

  // Управление цветом текста
  document.querySelectorAll('.book__control_color > .color').forEach(elem => {
    elem.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelectorAll('.book__control_color > .color').forEach(item => item.classList.remove('color_active'));
      this.classList.add('color_active');
      
      const currentColor = this.dataset.textColor;

      const book = document.querySelector('.book');
      book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
      book.classList.add(`book_color-${currentColor}`);
    });
  });

  // Управление цветом фона
  document.querySelectorAll('.book__control_background > .color').forEach(elem => {
    elem.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelectorAll('.book__control_background > .color').forEach(item => item.classList.remove('color_active'));
      this.classList.add('color_active');
      
      const currentBgColor = this.dataset.bgColor;

      const book = document.querySelector('.book');
      book.classList.remove('bg_color_black', 'bg_color_gray', 'bg_color_white');
      book.classList.add(`bg_color_${currentBgColor}`);
    });
  });
  
});