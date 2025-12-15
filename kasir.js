let orders = JSON.parse(localStorage.getItem("orders")) || [];
const list = document.getElementById("list");

function render(){
  list.innerHTML="";
  orders.forEach((o,i)=>{
    list.innerHTML += `
    <div class="card">
      <b>${o.nama}</b> | Bangku ${o.bangku}<br>
      Email: ${o.email}<br>
      Jumlah: ${o.jumlah}<br>
      Payment: ${o.payment}<br>
      Total: Rp${o.total}<br>
      <button onclick="done(${i})">Selesai</button>
    </div>`;
  });
}

function done(i){
  orders[i].status="Selesai";
  let laporan = JSON.parse(localStorage.getItem("laporan")) || [];
  laporan.push(orders[i]);
  localStorage.setItem("laporan", JSON.stringify(laporan));
  orders.splice(i,1);
  localStorage.setItem("orders", JSON.stringify(orders));
  render();
}

render();
