const audio = new Audio("notify.mp3");
let lastPlayed = localStorage.getItem("lastNotified");

function checkOrder() {
  const order = JSON.parse(localStorage.getItem("order"));
  if (!order) return;

  if (order.id != lastPlayed) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
    localStorage.setItem("lastNotified", order.id);
  }
}

setInterval(checkOrder, 2000);
