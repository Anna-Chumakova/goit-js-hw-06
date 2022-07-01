"use strict"
//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
const categoriesEl = document.querySelectorAll(".item");
const countCategoriesEl = categoriesEl.length;
console.log("Number of categories:", countCategoriesEl);

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

categoriesEl.forEach((element) => {
    return console.log(`Category: ${element.querySelector("h2").textContent}
Elements:${element.querySelectorAll("li").length}`);
})