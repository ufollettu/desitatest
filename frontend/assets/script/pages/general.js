window.addEventListener("DOMContentLoaded", (event) => {
  console.log("general data page loaded");
  const state = {
    requestSaved: false,
  };

  const saveRequestButton = document.getElementById("save-request");
  const closeModal = document.getElementById("modal-close");
  const closeModalSaved = document.getElementById("modal-close-saved");
  const modalSave2 = document.getElementById("modal-save-2");

  saveRequestButton.addEventListener("click", (event) => {
    state.requestSaved = true;
  });

  closeModal.addEventListener("click", (event) => {
    console.log("close modal");
    window.location.href =
      "/pagamenti-dovuti-multa-inserire-dati-specifici.html";
  });
  closeModalSaved.addEventListener("click", (event) => {
    console.log("close modal");
    window.location.href =
      "/pagamenti-dovuti-multa-inserire-dati-specifici.html";
  });

  modalSave2.addEventListener("click", (event) => {
    console.log("modalSave2");
    window.location.href =
      "/pagamenti-dovuti-multa-inserire-dati-specifici.html";
  });
});
