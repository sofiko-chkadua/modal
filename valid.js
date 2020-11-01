let forms = document.querySelectorAll(".modal__form");
forms.forEach((form) => {
  let inputs = Array.from(form.querySelectorAll(".modal__input"));

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
        const button = form.querySelector(".modal__save-button");
        button.textContent = "Not valid";
        button.disabled = true;
      } else {
        const button = form.querySelector(".modal__save-button");
        button.textContent = "Valid";
        button.disabled = false;
      }
    });
  });
});
