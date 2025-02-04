"use strict";
function setValidation(){
//Функция валидации
function validation(form) {
  function removeError(input) {
    const parent = input.parentNode;
    if (parent.classList.contains("error")) {
      parent.querySelector(".error-label").remove();
      parent.classList.remove("error");
    }
  }
  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement("label");

    errorLabel.classList.add("error-label");
    errorLabel.textContent = text;

    parent.classList.add("error");
    parent.append(errorLabel);
  }
  let result = true;
  const allInputs = form.querySelectorAll("input");

  for (const input of allInputs) {
    removeError(input);


    // Проверка на заполнение почты
    if (input.dataset.email == "true") {
      const regex =  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      if (!regex.test(input.value)) {
        removeError(input);
        createError(input, "Введите email");
        result = false;
      }
    }   

    //Проверка поля на пустоту
    if (input.dataset.required == "true") {
      if (input.value == "") {
        removeError(input);
        createError(input, "Поле не заполнено");
        result = false;
      }
    }
  }

  return result;
}

//Условия валидации
document
  .getElementById("add-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validation(this) == true) {
      this.submit();
    }
  });
//Сохранение и изъятие в localStorage
document.addEventListener("DOMContentLoaded", function () {
  let formData = {};
  const form = document.querySelector(".form");
  const LS = localStorage;

  form.addEventListener("input", function (event) {
    formData[event.target.name] = event.target.value;
    LS.setItem("formData", JSON.stringify(formData));
  });

  if (LS.getItem("formData")) {
    if (LS.getItem("formData")) {
      formData = JSON.parse(LS.getItem("formData"));
      console.log(formData);
      // Проверяем, что у всех элементов формы есть атрибут name
      Object.keys(formData).forEach((key) => {
        const element = form.elements[key];
        if (element) {
          element.value = formData[key];
        } else {
          console.error(`Элемент с именем ${key} не найден в форме.`);
        }
      });
    }
  }
});
}

export default setValidation;