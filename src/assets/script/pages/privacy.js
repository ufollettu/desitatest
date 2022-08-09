window.addEventListener("DOMContentLoaded", (event) => {
  console.log("privacy page loaded");
  const privacyError = document.getElementById("privacy-error");
  const forwardButton = document.getElementById("forward-button");

  forwardButton.addEventListener("click", (event) => {
    const privacyCheckbox = document.getElementById("privacy");
    const isValid = privacyCheckbox.checked;
    if (isValid) {
      window.location.href = window.location.href.replace("privacy", "general");
    } else {
      privacyCheckbox.classList.add("is-invalid");
      privacyError.classList.remove("d-none");
    }
    privacyCheckbox.addEventListener("change", (event) => {
      if (event.target.checked) {
        privacyCheckbox.classList.remove("is-invalid");
        privacyError.classList.add("d-none");
      }
    });
  });
  // TODO: set state in localStorage
});
