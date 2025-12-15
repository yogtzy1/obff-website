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
      `<li>Total Rp${o.total} - ${o.time}</li>`;
    document.getElementById("sound").play();
  }
}
