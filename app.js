const menuData = [
  { name: "Nasi Kucing", price: 5000 },
  { name: "Sate Usus", price: 3000 },
  { name: "Sate Telur Puyuh", price: 4000 },
  { name: "Gorengan", price: 2000 },
  { name: "Es Teh", price: 3000 },
  { name: "Kopi Jos", price: 5000 }
];

let cart = [];

const menuEl = document.getElementById("menu");
menuData.forEach((m, i) => {
  menuEl.innerHTML += `
    <div class="item">
      <span>${m.name}</span>
      <span>Rp${m.price}</span>
      <button onclick="add(${i})">+</button>
    </div>
  `;
});

function add(i) {
  cart.push(menuData[i]);
  render();
}

function render() {
  const c = document.getElementById("cart");
  c.innerHTML = "";
  let total = 0;
  cart.forEach(i => {
    total += i.price;
    c.innerHTML += `<li>${i.name} - Rp${i.price}</li>`;
  });
  document.getElementById("total").innerText = total;
}

function checkout() {
  const order = {
    id: Date.now(),
    items: cart,
    total: cart.reduce((a, b) => a + b.price, 0),
    status: "Menunggu",
    time: new Date().toLocaleString()
  };

  localStorage.setItem("order", JSON.stringify(order));
  localStorage.setItem("lastOrder", JSON.stringify(order));
  window.location = "struk.html";
}

