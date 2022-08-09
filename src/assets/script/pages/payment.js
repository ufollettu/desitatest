import { store } from "./store";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("payment data page loaded");

  const localDate = store.get("date");
  const localAmount = store.get("amount");
  const paymentInfo = document.getElementById("payment-info");
  const paymentAmount = document.getElementById("payment-amount");

  const confirmDataBtn = document.getElementById("confirm-data-btn");

  if (localAmount) {
    const today = new Date();
    const fineDate = new Date(localDate);

    const diffTime = Math.abs(today - fineDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    paymentAmount.innerHTML = localAmount;
    if (diffDays >= 6) {
      paymentInfo.innerHTML = `Pagamento standard`;
    } else {
      paymentInfo.innerHTML = `Pagamento in misura ridotta, perché il pagamento avviene dopo il 5° giorno dalla notifica.`;
    }
  }

  confirmDataBtn.addEventListener("click", (event) => {
    window.location.href = window.location.href.replace("payment", "summary");
  });
});
