function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector("#boxes");
const inputEl = document.querySelector('input[type="number"]');
const btnElCreate = document.querySelector('button[data-create]');
const btnElDestroy = document.querySelector('button[data-destroy]');

btnElCreate.addEventListener("click", onCreateBoxes);
btnElDestroy.addEventListener("click", onBoxDestroy);
 
const valueSize = 20;

function onCreateBoxes() {
  let fragment = new DocumentFragment();
   // let arrayDiv = [];
  for (let i = 1; i <= inputEl.value; i += 1) {
  
  const divNew = document.createElement('div');
  
  divNew.style.width = `${valueSize + i * 10}px`;
  divNew.style.height = `${valueSize + i * 10}px`;
  divNew.style.backgroundColor = getRandomHexColor();
  //arrayDiv.push(divNew[i]);  
    
    fragment.appendChild(divNew);
  }
  divEl.append(fragment);
  }

 function onBoxDestroy () {
  divEl.innerHTML = '';
  inputEl.value = '';
}


