window.addEventListener("DOMContentLoaded", (event) => {
  console.log("specific data page loaded");

  const codeInput = document.getElementById("code");
  const forwardButton = document.getElementById("submit-forward");
  const fineData = document.getElementById("fine-data");
  const fineAmount = document.getElementById("fine-amount");
  const fineInfo = document.getElementById("fine-info");
  const dateInput = document.getElementById("date-1");

  codeInput.addEventListener("keyup", (event) => {
    const value = event.target.value;
    if (value.length === 18) {
      fineData.classList.remove("d-none");
    } else {
      fineData.classList.add("d-none");
    }
  });

  dateInput.addEventListener("change", (event) => {
    const value = event.target.value;
    console.log(value);
    if (value.length === 10) {
      fineAmount.innerHTML = "38,42 €";
      fineInfo.classList.remove("d-none");
      forwardButton.disabled = false;
      forwardButton.classList.remove("disabled");
    } else {
      fineAmount.innerHTML = "--,-- €";
      fineInfo.classList.add("d-none");
      forwardButton.disabled = true;
      forwardButton.classList.add("disabled");
    }
  });

  forwardButton.addEventListener("click", (event) => {
    window.location.href = window.location.href.replace("specific", "payment");
  });
});
