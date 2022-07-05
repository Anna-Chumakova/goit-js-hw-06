const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("ul");
const createList = ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  ingredientsEl.append(item);
})



//const createList = (ingredients) => {
//  return ingredients.reduce((acc, ingredient) => acc + `<li>${ingredient}</li>`, "");
//}
//const list = document.querySelector("ul");
//list.classList.add('item');
//list.insertAdjacentHTML("beforeend", createList(ingredients));
