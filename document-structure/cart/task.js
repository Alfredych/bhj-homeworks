document.addEventListener('DOMContentLoaded', function() {
  // Уменьшаем или увеличиваем количества товаров
  document.querySelectorAll('.product__quantity-control').forEach(quantityControl => {
    quantityControl.addEventListener('click', function() {
      const controlsContainer = this.closest('.product__quantity-controls');
      const valueElement = controlsContainer.querySelector('.product__quantity-value');
      let value = parseInt(valueElement.textContent);
      
      if (this.classList.contains('product__quantity-control_dec')) {
        if (value > 1) {
          value--;
        }
      } else if (this.classList.contains('product__quantity-control_inc')) {
        value++;
      }
      
      valueElement.textContent = value;
    });
  });

  // Обработчик для кнопки добавления товара в корзину
  document.querySelectorAll('.product__add').forEach(addButton => {
    addButton.addEventListener('click', function() {
      const product = this.closest('.product');
      const productId = product.dataset.id;
      const productImage = product.querySelector('.product__image').src;
      const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
      
      addToCart(productId, productImage, quantity);
    });
  });

  // Функция добавления товара в корзину
  function addToCart(productId, productImage, quantity) {
    const cartProducts = document.querySelector('.cart__products');
    let existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
    
    if (existingProduct) {
      // Если товар уже есть в корзине
      const countElement = existingProduct.querySelector('.cart__product-count');
      const currentCount = parseInt(countElement.textContent);
      countElement.textContent = currentCount + quantity;
    } else {
      // Если товара еще нет в корзине
      const productElement = document.createElement('div');
      productElement.className = 'cart__product';
      productElement.dataset.id = productId;
      
      const imageElement = document.createElement('img');
      imageElement.className = 'cart__product-image';
      imageElement.src = productImage;
      
      const countElement = document.createElement('div');
      countElement.className = 'cart__product-count';
      countElement.textContent = quantity;
      
      productElement.appendChild(imageElement);
      productElement.appendChild(countElement);
      cartProducts.appendChild(productElement);
    }
  }
});