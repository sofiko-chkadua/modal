let modal__closedbutton = document.querySelector("#modal__closed-button");
let intro__editbutton = document.querySelector("#intro__edit-button");
let modal__savebutton = document.querySelector("#modal__save-button");
let modal = document.querySelector("#modal");

modal__closedbutton.addEventListener("click", function(){
  modal.classList.toggle("modal_closed");
});

intro__editbutton.addEventListener("click", function(){
  modal.classList.toggle("modal_closed");
});

modal__savebutton.addEventListener("click", function(){
    modal.classList.add("modal_closed");
  });
  