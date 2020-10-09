const modalClosedButton = document.querySelector(".modal__closed-button");
const editButton = document.querySelector(".intro__edit-button");
const modalSubmitButton = document.querySelector(".modal__save-button");
const modal = document.querySelector(".modal_type_edit");
const userTitle = document.querySelector(".intro__title");
const userSubtitle = document.querySelector(".intro__subtitle");
const userNameInput = document.querySelector(".modal__input_type_name");
const userJobInput = document.querySelector(".modal__input_type_job");
const form = document.querySelector(".modal__form");

// переменная на которую вешаем функцию.сама функция("событие", слово функция() {
// делишки функции
// })

// form.forEach()

modalClosedButton.addEventListener("click", function() {
  userNameInput.value = userTitle.textContent;
  userJobInput.value = userSubtitle.textContent;
  toggleModalWindow();
});

editButton.addEventListener("click", toggleModalWindow);

form.addEventListener("submit", function(e){
  e.preventDefault();
 const name = userNameInput.value;
 const job = userJobInput.value;
 userTitle.textContent = name;
 userSubtitle.textContent = job;
 modal.classList.add("modal_closed");
});

  // если ты кликнешь на сохранить, то страница перезагрузится и сохранение профиля не произойдет
  // перезагрузка - деволтное поведение когда нажимаешь на кнопку внутри формы, чтобы от него отказаться
  // нужно написать e.preventDefault() , где e должен быть паарметром в фунции

  // плюс ты не оюновляешь данные профиля, когда сохраняешь форму  
function toggleModalWindow() {
  modal.classList.toggle("modal_closed"); 
}
  // + вынести modal.classList.toggle("modal_closed"); в отдельную функцию toggleModalWindow и дергать ее каждый раз когда это нужно


  // 1 ВАРИАНТ - ДОБАВЛЯЕМ HTML
  let card = document.querySelector(".photo-grid");
  card.insertAdjacentHTML("afterbegin",`<div class="photo-card"><img class="photo-card__photo" src="./image/karachaevsk.jpg" alt="карачаевск"><div class="photo-card__description"><h2 class="photo-card__title">Карачаевск</h2><button class="photo-card__button"></button></div></div>`);
  
//   // 2 ВАРИАНТ - ДОБАВЛЯЕМ ЭЛЕМЕНТ
  // let card = document.querySelector(".photo-grid");
  let cardItem = document.createElement("cardItem");
  cardItem.innerHTML=`<div class="photo-card"><img class="photo-card__photo" src="./image/karachaevsk.jpg" alt="карачаевск"><div class="photo-card__description"><h2 class="photo-card__title">Карачаевск</h2><button class="photo-card__button"></button></div></div>`;
card.insertAdjacentElement("afterbegin", cardItem);

// // почему при клонировании не сохраняются стили?
let cardItem2 = cardItem.cloneNode(true);
cardItem2.querySelector(".photo-card__description").innerHTML = "Жопа карамельная";
cardItem.after(cardItem2);



// 3 ВАРИАНТ - ЧЕРЕЗ TEMPLATE - получилось но ненормально

function ShowCard() {
let template = document.getElementsByTagName("template")[0];
let clon = template.content.cloneNode(true);
document.body.appendChild(clon);
}
