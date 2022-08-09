window.addEventListener("DOMContentLoaded", (event) => {
  console.log("general data page loaded");

  const closeModal = document.getElementById("modal-close");
  const closeModalSaved = document.getElementById("modal-close-saved");
  const modalSave2 = document.getElementById("modal-save-2");

  closeModal.addEventListener("click", (event) => {
    window.location.href = window.location.href.replace("general", "specific");
  });
  closeModalSaved.addEventListener("click", (event) => {
    window.location.href = window.location.href.replace("general", "specific");
  });

  modalSave2.addEventListener("click", (event) => {
    window.location.href = window.location.href.replace("general", "specific");
  });
});
