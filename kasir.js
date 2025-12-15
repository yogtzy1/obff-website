function login(){
  if(document.getElementById("pass").value==="angkasaae"){
    document.getElementById("dashboard").style.display="block";
    load();
  }else alert("Password salah");
}

function load(){
  const o=JSON.parse(localStorage.getItem("order"));
  if(o){
    document.getElementById("orders").innerHTML=
      `<li>Total function login() {
  if (document.getElementById("pass").value === "angkasaae") {
    document.getElementById("panel").style.display = "block";
    loadOrder();
  } else {
    alert("Password salah");
  }
}

function loadOrder() {
  const o = JSON.parse(localStorage.getItem("order"));
  if (!o) return;

  document.getElementById("order").innerHTML = `
    <p><b>ID:</b> ${o.id}</p>
    <p><b>Total:</b> Rp${o.total}</p>
    <p><b>Status:</b> ${o.status}</p>
    <button onclick="finish()">Selesaikan</button>
  `;
}

function finish() {
  let o = JSON.parse(localStorage.getItem("order"));
  o.status = "Selesai";
  localStorage.setItem("order", JSON.stringify(o));
  alert("Pesanan selesai");
}
Rp${o.total} - ${o.time}</li>`;
    document.getElementById("sound").play();
  }
}
