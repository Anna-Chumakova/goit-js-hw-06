function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const fragment = document.querySelector("#boxes");
const inputEl = document.querySelector('input[type="number"]');
const btnElCreate = document.querySelector('button[data-create]');
const btnElDestroy = document.querySelector('button[data-destroy]');

inputEl.addEventListener("input", onInput);
btnElCreate.addEventListener("click", onCreateBoxes);
btnElDestroy.addEventListener("click", onBoxDestroy);


function onBoxDestroy () {
  fragment.innerHTML = '';
  inputEl.value = '';
}
 function onInput(elem) {
   let numberArray = [];
   const item = elem.currentTarget.value;
   numberArray.push(item);
   console.log(numberArray);
 }
function onCreateBoxes() {

  let numberArray = [];
  for (let i = 1; i <= inputEl.value; i += 1) {
    numberArray.push(i);
  };
  console.log(numberArray);
  const boxes = numberArray.map((number) => {
    const createBox  = document.createElement('div');
    const valueSize = 30 + number * 10 + 'px';
    createBox.style.width = valueSize;
    createBox.style.height = valueSize;
    createBox.style.backgroundColor = getRandomHexColor();
    return createBox;
    }); 
  fragment.append(...boxes);
};


