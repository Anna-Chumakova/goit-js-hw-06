const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("ul");
const listElFirst = document.createElement("li");
listElFirst.classList.add("item");
listElFirst.textContent = 'Potatoes';
const listElSecond = document.createElement("li");
listElSecond.textContent = 'Mushrooms';
listElSecond.classList.add("item");
const listElThird = document.createElement("li");
listElThird.textContent = 'Garlic';
listElThird.classList.add("item");
const listElfourth = document.createElement("li");
listElfourth.textContent = 'Tomatos';
listElfourth.classList.add("item");
const listElFifth = document.createElement("li");
listElFifth.textContent = 'Herbs';
listElFifth.classList.add("item");
const listElSixth = document.createElement("li");
listElSixth.textContent = 'Condiments';
listElSixth.classList.add("item");

ingredientsEl.append(listElFirst, listElSecond, listElThird, listElfourth, listElFifth, listElSixth);

//const createList = (ingredients) => {
//  return ingredients.reduce((acc, ingredient) => acc + `<li>${ingredient}</li>`, "");
//}
//const list = document.querySelector("ul");
//list.classList.add('item');
//list.insertAdjacentHTML("beforeend", createList(ingredients));
