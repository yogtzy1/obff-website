let cart=[];
let total=0;

function addItem(name,price){
  cart.push({name,price});
  total+=price;
  render();
}

function render(){
  const el=document.getElementById("cart");
  el.innerHTML="";
  cart.forEach(i=>{
    el.innerHTML+=`<li>${i.name} - Rp${i.price}</li>`;
  });
  document.getElementById("total").innerText=total;
}

function checkout(){
  const order={
    items:cart,
    total:total,
    time:new Date().toLocaleString()
  };
  localStorage.setItem("order",JSON.stringify(order));
  localStorage.setItem("lastOrder",JSON.stringify(order));
  alert("Pesanan dikirim!");
  window.location="struk.html";
}
