let forms = document.querySelectorAll(".modal__form");
forms.forEach((form) => {
  let inputs = Array.from(form.querySelectorAll(".modal__input"));
  const modalSubmitButton = form.querySelector('.modal__save-button');


  inputs.forEach((input) => {

    
    input.addEventListener("input", function () {
      if (input.validity.valid) {
        const error = document.querySelector("#" + input.id + "-error");
        error.textContent = "Нет ошибки";
      } else {
        const error = document.querySelector("#" + input.id + "-error");
        error.textContent = input.validationMessage;
      }

      const isValid = inputs.every((input) => {
        return input.validity.valid;
      });

      if (!isValid) {
        modalSubmitButton.textContent = "Not valid";
        modalSubmitButton.disabled = true;
      } else {
        modalSubmitButton.textContent = "Valid";
        modalSubmitButton.disabled = false;
      }
    });
  });
});
