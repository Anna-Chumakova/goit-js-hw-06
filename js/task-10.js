function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector("#boxes");
const inputEl = document.querySelector('input[type="number"]');
const btnElCreate = document.querySelector('button[data-create]');
const btnElDestroy = document.querySelector('button[data-destroy]');

btnElCreate.addEventListener("click", onCreateBoxes);
btnElDestroy.addEventListener("click", onBoxDestroy);
 
let valueSize = 20;

function onCreateBoxes() {
  let fragment = new DocumentFragment();
  
  for (let i = 1; i <= inputEl.value; i += 1) {
  valueSize += i * 10;
  let divNew = document.createElement('div');
  
  divNew.style.width = `${valueSize }px`;
  divNew.style.height = `${valueSize}px`;
  divNew.style.backgroundColor = getRandomHexColor(); 
    fragment.appendChild(divNew);
  }
  divEl.append(fragment);
  }

function onBoxDestroy() {
  valueSize = 20;
  divEl.innerHTML = '';
  inputEl.value = '';
}


