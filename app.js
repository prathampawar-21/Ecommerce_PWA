const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 }
];

const productDiv = document.getElementById("products");
const cartList = document.getElementById("cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add</button>
    `;
    productDiv.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });
}

renderProducts();
renderCart();