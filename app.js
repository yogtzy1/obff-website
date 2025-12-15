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

const menu = [
  {name:"Nasi Kucing", price:5000},
  {name:"Sate Usus", price:3000},
  {name:"Telur Puyuh", price:4000},
  {name:"Gorengan", price:2000},
  {name:"Es Teh", price:3000},
  {name:"Kopi", price:5000}
];

let cart = [];
const menuEl = document.getElementById("menu");
const cartEl = document.getElementById("cart");

menu.forEach((m,i)=>{
  menuEl.innerHTML += `
    <div class="item">
      ${m.name} - Rp${m.price}
      <button onclick="add(${i})">+</button>
    </div>`;
});

function add(i){
  cart.push(menu[i]);
  render();
}

function render(){
  cartEl.innerHTML="";
  let total=0;
  cart.forEach(i=>{
    total+=i.price;
    cartEl.innerHTML+=`<li>${i.name} Rp${i.price}</li>`;
  });
  document.getElementById("jumlah").innerText = cart.length;
  document.getElementById("total").innerText = total;
}

function checkout(){
  if(!nama.value || !bangku.value){
    alert("Nama & nomor bangku wajib diisi");
    return;
  }

  const order = {
    id: Date.now(),
    nama: nama.value,
    email: email.value,
    bangku: bangku.value,
    items: cart,
    jumlah: cart.length,
    total: cart.reduce((a,b)=>a+b.price,0),
    payment: payment.value,
    status: "Menunggu",
    time: new Date().toLocaleString()
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("lastOrder", JSON.stringify(order));

  window.location = "struk.html";
}
