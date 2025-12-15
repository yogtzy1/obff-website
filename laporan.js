const PASSWORD = "angkasaae";
const data = JSON.parse(localStorage.getItem("laporan")) || [];

function login(){
  if(pass.value === PASSWORD){
    panel.style.display="block";
    load();
  } else alert("Password salah");
}

function load(){
  let omzet = 0;
  data.forEach(d=>{
    omzet += d.total;
    document.getElementById("data").innerHTML +=
      `<li>${d.time} | ${d.nama} | Bangku ${d.bangku} | Rp${d.total} | ${d.payment}</li>`;
  });
  count.innerText = data.length;
  document.getElementById("omzet").innerText = omzet;
}

function exportExcel(){
  let csv = "Waktu,Nama,Bangku,Total,Payment\n";
  data.forEach(d=>{
    csv += `${d.time},${d.nama},${d.bangku},${d.total},${d.payment}\n`;
  });
  const blob = new Blob([csv],{type:"text/csv"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "laporan-decaffe-angkasa.csv";
  a.click();
}
