function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");
btnEl.addEventListener("click", onColorChange); 
  
let color = getRandomHexColor();
console.log(color);
function onColorChange(event) {
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}
  
  

