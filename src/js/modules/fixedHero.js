"use strict";

function fixedHero() {
  // Получаем первый элемент с классом .my-element
  let element = document.querySelector(".header");

  // Проверяем, существует ли элемент
  if (element) {
    // Получаем высоту элемента
    let height = element.offsetHeight;

    // Выводим высоту в консоль
    console.log("Высота элемента:", height);
  } else {
    console.log("Элемент с классом .my-element не найден.");
  }
}
export default fixedHero;
