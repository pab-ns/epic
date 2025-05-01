const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay");
const openButton = document.querySelector("#open-button");
const closeButton = document.querySelector("#close-button");

openButton.addEventListener("click", () => {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

closeButton.addEventListener("click", () => {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});
