// когда именуешь переменные, то делать это надо в camelCase, не важно как они называны в html
// modal__closedbutton =>  modalClosedButton

const modalClosedButton = document.querySelector(".modal__closed-button");
// плюс название должно отображать смысл этой переменно
// intro__editbutton => можно оставить editButton или openModalButton
const editButton = document.querySelector(".intro__edit-button");
// modalSubmitButton
const modalSubmitButton = document.querySelector(".modal__save-button");
const modal = document.querySelector(".modal");
// userTitle
const userTitle = document.querySelector(".intro__title");
// usersubtitle
const userSubtitle = document.querySelector(".intro__subtitle");

// userNameInput
const userNameInput = document.querySelector(".modal__input_type_name");
// userJobInput
const userJobInput = document.querySelector(".modal__input_type_job");

const form = document.querySelector(".modal__form");

// вот это нужно перенести внутри функции и брать textContent каждый раз когда ты открываешь модалка
// он всегда будет разный позле каждого нового сохранения
// const title = intro__title.textContent;
// const subtitle = intro__subtitle.textContent;


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
  // если ты кликнешь на сохранить, то страница перезагрузится и сохранение профиля не произойдет
  // перезагрузка - деволтное поведение когда нажимаешь на кнопку внутри формы, чтобы от него отказаться
  // нужно написать e.preventDefault() , где e должен быть паарметром в фунции

  // плюс ты не оюновляешь данные профиля, когда сохраняешь форму
    modal.classList.add("modal_closed");
  });
  
function toggleModalWindow() {
  modal.classList.toggle("modal_closed"); 
}
  // + вынести modal.classList.toggle("modal_closed"); в отдельную функцию toggleModalWindow и дергать ее каждый раз когда это нужно