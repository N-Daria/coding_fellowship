const openPopupButton = document.querySelector(".content__button");
const form = document.querySelector(".form");
const poopup = document.querySelector(".popup");
const uploadImage = form.querySelector(".upload");
const cancelPhotoUploading = form.querySelector(".file__cancel");
const photo = form.querySelector(".file__photo");

// close / open popup

const openPopup = () => {
  poopup.classList.add("popup_opened");
};

const closePopup = () => {
  poopup.classList.remove("popup_opened");
};

const handleSubmit = (e) => {
  e.preventDefault();

  // checkValidate
  // serialize
  // send
};

const handleUpload = (e) => {
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

form.addEventListener("submit", handleSubmit);
