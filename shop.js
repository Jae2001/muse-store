const products = [
  { id: 1, name: "活性炭香皂", price: 10, img: "images/black-soap.jpg" },
  { id: 2, name: "燕麦香皂", price: 12, img: "images/beige-soap.jpg" },
  { id: 3, name: "绿茶香皂", price: 11, img: "images/green-soap.jpg" },
  { id: 4, name: "薰衣草香皂", price: 13, img: "images/purple-soap.jpg" },
  { id: 5, name: "蜂蜜香皂", price: 14, img: "images/yellow-soap.jpg" },
  { id: 6, name: "玫瑰香皂", price: 15, img: "images/pink-soap.jpg" },
];

const cart = [];

function renderProducts() {
  const productsDiv = document.getElementById("products");
  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <p>${product.name}</p>
      <p>RM${product.price}</p>
      <button onclick="addToCart(${product.id})">加入购物车</button>
    `;
    productsDiv.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";
  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>购物车为空</p>";
    document.getElementById("checkout-button").disabled = true;
    return;
  }
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartDiv.innerHTML += `<p>${item.name} - RM${item.price} <button onclick="removeFromCart(${index})">删除</button></p>`;
  });
  cartDiv.innerHTML += `<p><strong>总计: RM${total}</strong></p>`;
  document.getElementById("checkout-button").disabled = false;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

document.getElementById("checkout-button").addEventListener("click", () => {
  alert("这一步需要后端支持Stripe支付，等部署后我教你怎么设置！");
});

renderProducts();
renderCart();
