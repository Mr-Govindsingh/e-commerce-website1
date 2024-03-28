// script.js
let cartItems = [];
let totalPrice = 0;

function addToCart(productName, price) {
  cartItems.push({ productName, price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
  document.getElementById('cart-total').textContent = `$${totalPrice.toFixed(2)}`;
}

function checkout() {
  alert('Thank you for your purchase!');
  cartItems = [];
  totalPrice = 0;
  updateCart();
}
