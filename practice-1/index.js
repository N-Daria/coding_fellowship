const openPopupButton = document.querySelector(".content__button");
const poopup = document.querySelector(".popup");

// close / open popup

const openPopup = () => {
  poopup.classList.add("popup_opened");
};

const closePopup = () => {
  poopup.classList.remove("popup_opened");
};

openPopupButton.addEventListener("click", openPopup);

poopup.addEventListener("click", (event) => {
  if (event.currentTarget === event.target) {
    closePopup();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopup();
  }
});
