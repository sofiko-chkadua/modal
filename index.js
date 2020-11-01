const modalClosedButton = document.querySelector(".modal__closed-button");
const editButton = document.querySelector(".intro__edit-button");
const modalSubmitButton = document.querySelector(".modal__save-button");
const modal = document.querySelector(".modal_type_edit");
const userTitle = document.querySelector(".intro__title");
const userSubtitle = document.querySelector(".intro__subtitle");
const userNameInput = document.querySelector(".modal__input_type_name");
const userJobInput = document.querySelector(".modal__input_type_job");
const form = document.querySelector(".modal__form");
const modalAdd = document.querySelector(".modal_type_addcard");
const addButton = document.querySelector(".intro__add-button");
const modalAddClosedButton = document.querySelector(".modal__closed-button_type_addcard");
const modalAddImage = document.querySelector(".modal_type_image");
const image = document.querySelector(".photo-card__photo");
const modalAddImageClosedButton = document.querySelector(".modal__closed-button_type_image");

const cardsData = [
  {
    link: "./image/karachaevsk.jpg",
    text: "Карачаевск",
  },
  {
    link: "./image/elbrus.jpg",
    text: "Гора Эльбрус",

  },
  {
    link: "./image/dombai.jpg",
    text: "Домбай",

  },
  {
    link: "./image/elbrus.jpg",
    text: "Гора Эльбрус",

  },
  {
    link: "./image/dombai.jpg",
    text: "Домбай",

  },
  {
    link: "./image/karachaevsk.jpg",
    text: "Карачаево-Черкессия",
  },
];

let photoGrid = document.querySelector(".photo-grid");
let template = document.getElementsByTagName("template")[0];

function generateCard(link, text) {
  let clon = template.content.cloneNode(true);
  const title = clon.querySelector(".photo-card__title");
  const image = clon.querySelector(".photo-card__photo");
  title.textContent = text;
  image.src = link;
  const deleteButton = clon.querySelector(".photo-card__delete");
  deleteButton.addEventListener("click", function () {
    deleteButton.closest(".photo-card").remove();
  });
  photoGrid.append(clon);
}


cardsData.forEach((card) => {
  console.log(card);
  generateCard(card.link, card.text);
});

// модалка редактирование профиля

modalClosedButton.addEventListener("click", function () {
  userNameInput.value = userTitle.textContent;
  userJobInput.value = userSubtitle.textContent;
  toggleModalWindow();
});

editButton.addEventListener("click", toggleModalWindow);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = userNameInput.value;
  const job = userJobInput.value;
  userTitle.textContent = name;
  userSubtitle.textContent = job;
  modal.classList.add("modal_closed");
});

function toggleModalWindow() {
  modal.classList.toggle("modal_closed");
}

// генерация карточек

// 1 ВАРИАНТ - ДОБАВЛЯЕМ HTML
//   let card = document.querySelector(".photo-grid");
//   card.insertAdjacentHTML("afterbegin",`<div class="photo-card"><img class="photo-card__photo" src="./image/karachaevsk.jpg" alt="карачаевск"><div class="photo-card__description"><h2 class="photo-card__title">Карачаевск</h2><button class="photo-card__button"></button></div></div>`);

// 2 ВАРИАНТ - ДОБАВЛЯЕМ ЭЛЕМЕНТ
//   // let card = document.querySelector(".photo-grid");
//   let cardItem = document.createElement("cardItem");
//   cardItem.innerHTML=`<div class="photo-card"><img class="photo-card__photo" src="./image/karachaevsk.jpg" alt="карачаевск"><div class="photo-card__description"><h2 class="photo-card__title">Карачаевск</h2><button class="photo-card__button"></button></div></div>`;
// card.insertAdjacentElement("afterbegin", cardItem);

// let cardItem2 = cardItem.cloneNode(true);
// cardItem2.querySelector(".photo-card__title").innerHTML = "ПРОВЕРКА";
// cardItem.after(cardItem2);

// // 3 ВАРИАНТ - ЧЕРЕЗ TEMPLATE

// function ShowCard() {
// let photoGrid = document.querySelector(".photo-grid");
// let template = document.getElementsByTagName("template")[0];
// let clon = template.content.cloneNode(true);
// photoGrid.append(clon); // вставить clon в конец photoGrid
// }

