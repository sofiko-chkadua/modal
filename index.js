const modal__closedbutton = document.querySelector(".modal__closed-button");
const intro__editbutton = document.querySelector(".intro__edit-button");
const modal__savebutton = document.querySelector(".modal__save-button");
const modal = document.querySelector(".modal");
const intro__title = document.querySelector(".intro__title");
const intro__subtitle = document.querySelector(".intro__subtitle");
const input__title = document.querySelector(".modal__input");
const input__subtitle = document.querySelector(".modal__last-input");
const title = intro__title.textContent;
const subtitle = intro__subtitle.textContent;


modal__closedbutton.addEventListener("click", function() {
  modal.classList.toggle("modal_closed");
  input__title.value = title;
  input__subtitle.value = subtitle;
});

intro__editbutton.addEventListener("click", function(){
  modal.classList.toggle("modal_closed");
});

modal__savebutton.addEventListener("click", function(){
    modal.classList.add("modal_closed");
  });
  
