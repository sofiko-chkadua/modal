import './index.css';
import cardsData from './data.js'

// модалки
const modalEdit = document.querySelector(".modal_type_edit");
const modalAdd = document.querySelector(".modal_type_addcard");
const modalAddImage = document.querySelector(".modal_type_image");

// Кнопки открытия
const editButton = document.querySelector(".intro__edit-button");
const addButton = document.querySelector(".intro__add-button");

// Кнопки закрытия
const modalEditCloseButton = modalEdit.querySelector(".modal__closed-button");
const modalAddClosedButton = modalAdd.querySelector(".modal__closed-button");
const modalAddImageClosedButton = modalAddImage.querySelector(".modal__closed-button");

// формы
const form = document.querySelector(".modal__form");
const addCardForm = modalAdd.querySelector(".modal__form");

// инпуты
const userNameInput = document.querySelector(".modal__input_type_name");
const userJobInput = document.querySelector(".modal__input_type_job");


// элементы
const userTitle = document.querySelector(".intro__title");
const userSubtitle = document.querySelector(".intro__subtitle");

const modalImage = document.querySelector(".modal__image");
const modalText = document.querySelector(".modal__text");

// ?
let photoGrid = document.querySelector(".photo-grid");
let template = document.querySelectorAll("template");



function toggleModalWindow(modal) {
  // проверяем, что если модалка открыта  и иы ее закрываем, то отписываемся
  if (modal.classList.contains('modal_open')) {
    document.removeEventListener("keyup", keyupHandler);
  } else {
    // если открываем, то подписываемся
    document.addEventListener("keyup", keyupHandler);
  }
  modal.classList.toggle("modal_open");
}


// подписки открытия
editButton.addEventListener("click", function () {
  toggleModalWindow(modalEdit);
});

addButton.addEventListener("click", function () {
  toggleModalWindow(modalAdd);
  document.addEventListener("keyup", keyupHandler);
});


// подписки закрытия
modalEditCloseButton.addEventListener("click", function () {
  userNameInput.value = userTitle.textContent;
  userJobInput.value = userSubtitle.textContent;
  toggleModalWindow(modalEdit);
});

modalAddClosedButton.addEventListener("click", function () {
  addCardForm.reset()
  toggleModalWindow(modalAdd);
});

modalAddImageClosedButton.addEventListener("click", function () {
  toggleModalWindow(modalAddImage);
});


// генерация карточек

function generateCard(link, text) {
  const clon = template[0].content.cloneNode(true);
  const title = clon.querySelector(".photo-card__title");
  const image = clon.querySelector(".photo-card__photo");
  const deleteButton = clon.querySelector(".photo-card__delete");
  const likeButton = clon.querySelector(".photo-card__button");
  
  title.textContent = text;
  image.src = link;
  
  deleteButton.addEventListener("click", function () {
    deleteButton.closest(".photo-card").remove();
  });

  image.addEventListener("click", function () {
    modalImage.src = link;
    modalText.textContent = text;
    toggleModalWindow(modalAddImage);
  });

  likeButton.addEventListener("click", function (e) {
    e.target.classList.toggle("photo-card__button_active");
  });

  photoGrid.append(clon);
}

cardsData.forEach((card) => {
  generateCard(card.link, card.text);
});



// закрытие по escape
const keyupHandler = function (e) {
  if (e.keyCode == 27) {
    const openModal = document.querySelector(".modal_open");
    toggleModalWindow(openModal);
  }
};

// подписка на форму
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = userNameInput.value;
  const job = userJobInput.value;
  userTitle.textContent = name;
  userSubtitle.textContent = job;
  toggleModalWindow(modalEdit);
});

// закрытие по оверлэй

modalEdit.addEventListener("click", function (e) {
  if (!e.target.closest(".modal__container")) {
    toggleModalWindow(modalEdit);
  }
  document.removeEventListener("keyup", keyupHandler);
});

modalAdd.addEventListener("click", function (e) {
  if (!e.target.closest(".modal__container")) {
    toggleModalWindow(modalAdd);
  }
  document.removeEventListener("keyup", keyupHandler);
});

modalAddImage.addEventListener("click", function (e) {
  if (!e.target.closest(".modal__container")) {
    toggleModalWindow(modalAddImage);
  }
  document.removeEventListener("keyup", keyupHandler);
});
