window.addEventListener("DOMContentLoaded", (event) => {
  console.log("privacy page loaded");
  const privacyCheckbox = document.getElementById("privacy");
  const forwardButton = document.getElementById("forward-button");

  privacyCheckbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      forwardButton.disabled = false;
      forwardButton.classList.remove("disabled");
    } else {
      forwardButton.disabled = true;
      forwardButton.classList.add("disabled");
    }
  });

  forwardButton.addEventListener("click", (event) => {
    window.location.href = window.location.href.replace("privacy", "general");
  });
});
