const basket = {
    products: [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500}
    
],

renderProducts() {
    let productList = document.querySelector('.products');
    this.products.forEach(function(products) {
        return productList.insertAdjacentHTML('beforeend',
        `<div class="product-item">
        <h3>${products.id}</h3>
        <h3>${products.title}</h3>
        <p>${products.price}</p>
        <button class="by-btn">Добавить в корзину</button>
      </div>`);
        })
   }
}

basket.renderProducts();




