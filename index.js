const modalClosedButton = document.querySelector(".modal__closed-button");
const editButton = document.querySelector(".intro__edit-button");
const modalSubmitButton = document.querySelector(".modal__save-button");
const modal = document.querySelector(".modal");
const userTitle = document.querySelector(".intro__title");
const userSubtitle = document.querySelector(".intro__subtitle");
const userNameInput = document.querySelector(".modal__input_type_name");
const userJobInput = document.querySelector(".modal__input_type_job");
const form = document.querySelector(".modal__form");
const modalAddClosedButton = document.querySelector(".modal__closed-button_type_addcard");
const modalAddImage = document.querySelector(".modal_type_image");
// модалка редактирования
const modalEdit = document.querySelector(".modal_type_edit");
const modalAddImageClosedButton = document.querySelector(".modal__closed-button_type_image");

import './index.css';

// закрытие по escape

const keyupHandler = function (e) {
  if (e.keyCode == 27) {
    const openModal = document.querySelector(".modal_open");
    // я заменила все вызовы togglePopup на вызовы toggleModalWindow
    toggleModalWindow(openModal);
  }
};

editButton.addEventListener("click", function () {
  toggleModalWindow(form);
});


// закрытие по клику на overlay 

modal.addEventListener("click", function (e) {
  if (!e.target.closest(".modal__container")) {
    toggleModalWindow(modal);
  }
  document.removeEventListener("keyup", keyupHandler);
});

// генерация карточек из массива

const cardsData = [
  {
    link: "./image/geo.jpg",
    text: "Svaneti",
  },

  {
    link: "./image/moscow.jpg",
    text: "Moscow",
  },
  {
    link: "./image/perudja.jpg",
    text: "Perujia",
  },
  {
    link: "./image/Toskana.jpg",
    text: "Toskana",
  },

  {
    link: "./image/italy.jpg",
    text: "Siena",
  },
  {
    link: "./image/waffle.jpg",
    text: "Vienne",
  },

  {
    link: "./image/pisa.jpg",
    text: "Pisa",
  },
  {
    link: "./image/breakfast.jpg",
    text: "Best breakfast in Umbria",
  },
  {
    link: "./image/flor.jpg",
    text: "Florence",
  },
  {
    link: "./image/apl.jpg",
    text: "Tirol",
  },
  {
    link: "./image/alpi.jpg",
    text: "Alps",
  },
  {
    link: "./image/rome.jpg",
    text: "Rome",
  },
  {
    link: "./image/alps.jpg",
    text: "Austria",
  },
  {
    link: "./image/prague.jpg",
    text: "Prague",
  },
  {
    link: "./image/fugen.jpg",
    text: "Fugen",
  },
];


let photoGrid = document.querySelector(".photo-grid");
let template = document.querySelectorAll("template");

function generateCard(link, text) {
  let clon = template[0].content.cloneNode(true);
  const title = clon.querySelector(".photo-card__title");
  const image = clon.querySelector(".photo-card__photo");
  title.textContent = text;
  image.src = link;
  const deleteButton = clon.querySelector(".photo-card__delete");
  deleteButton.addEventListener("click", function () {
    deleteButton.closest(".photo-card").remove();
  });

  // что делать когда кликаем по картинке
  image.addEventListener("click", function () {
    modalImage.src = link;
    modalText.textContent = text;
    modalAddImage.classList.toggle("modal_open");
  });

  photoGrid.append(clon);
}

cardsData.forEach((card) => {
  generateCard(card.link, card.text);
});

// модалка редактирование профиля

modalClosedButton.addEventListener("click", function () {
  userNameInput.value = userTitle.textContent;
  userJobInput.value = userSubtitle.textContent;
  
  // нужно передавать что открыть и что закрывать
  toggleModalWindow(modalEdit);
});

editButton.addEventListener("click", () => {
  toggleModalWindow(modalEdit);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = userNameInput.value;
  const job = userJobInput.value;
  userTitle.textContent = name;
  userSubtitle.textContent = job;
  modal.classList.remove("modal_open");
});

function toggleModalWindow(modal) {
  // проверяем, что если модалка открыта  и иы ее закрываем, то отписываемся
  if(modal.classList.contains('modal_open')) {
    document.removeEventListener("keyup", keyupHandler);
  } else {
    // если открываем, то подписываемся
    document.addEventListener("keyup", keyupHandler);
  }
  modal.classList.toggle("modal_open");
}

// лайк фото

const likes = document.querySelectorAll(".photo-card__button");
likes.forEach((like) => {
  like.addEventListener("click", function () {
    like.classList.toggle("photo-card__button_active");
  });
})

// показ фотки
const imageTitle = document.querySelector(".photo-card__title");
const images = document.querySelectorAll(".photo-card__photo");
const modalImage = document.querySelector(".modal__image");
const modalText = document.querySelector(".modal__text");

// Перенесем этот код в создание карточки, будем подписываться на клик на картинку при создании
// images.forEach((image) => {
//   image.addEventListener ("click", function() {
//     modalAddImage.classList.toggle("modal_open");
//     modalText.textContent = imageTitle.textContent;
//     modalImage.src = image.src;
//   });
// });

//  добавление карточки

const modalAdd = document.querySelector(".modal_type_addcard");
const addButton = document.querySelector(".intro__add-button");

addButton.addEventListener("click", function () {
  modalAdd.classList.toggle("modal_open");
});

addButton.addEventListener("click", function () {
  toggleModalWindow(form);
  document.addEventListener("keyup", keyupHandler);
});
modalAdd.addEventListener("click", function (e) {
  if (!e.target.closest(".modal__container")) {
    toggleModalWindow(modalAdd);
  }
});


