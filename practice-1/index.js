const openPopupButton = document.querySelector(".content__button");
const poopup = document.querySelector(".popup");
const uploadImage = document.querySelector(".upload");
const cancelPhotoUploading = document.querySelector(".file__cancel");
const photo = document.querySelector(".file__photo");

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

cancelPhotoUploading.addEventListener("click", () => {
  photo.setAttribute("src", "#");
});

uploadImage.addEventListener("change", handleUpload);

function handleUpload(e) {
  e.preventDefault();

  let file = e.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    photo.setAttribute("src", "");
    photo.setAttribute("src", reader.result);
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
}
