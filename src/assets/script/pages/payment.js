window.addEventListener("DOMContentLoaded", (event) => {
  console.log("payment data page loaded");

  const confirmDataBtn = document.getElementById("confirm-data-btn");

  confirmDataBtn.addEventListener("click", (event) => {
    window.location.href = window.location.href.replace("payment", "summary");
  });
});
