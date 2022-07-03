function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const containerEl = document.querySelector("#boxes");
const inputEl = document.querySelector('input[type="number"]');
const btnElCreate = document.querySelector('button[data-create]');
const btnElDestroy = document.querySelector('button[data-destroy]');

inputEl.addEventListener("input", onInput);
btnElCreate.addEventListener("click", onBoxCreate);
//btnElDestroy.addEventListener("click", onBoxDestroy);

function onInput(elem) {
  let elemArray = [];
  const item = elem.currentTarget.value;
  elemArray.push(item);
  console.log(elemArray);
}

function onBoxCreate() {
  let elemArray = [];
  for (let i = 1; i <= inputEl.value; i += 1) {
    elemArray.push(i);
    console.log(elemArray);
  }


  const boxes = elemArray.map((number) => {
    const createBox = document.createElement('div');
    const value = (20 + number * 10);
    createBox.style.width = `${value}px`;
    createBox.style.height = `${value}px`;
    createBox.style.backgroundColor = getRandomHexColor();
    return createBox;
  });
  getColorBox.append(...boxes);
}
  
//function createBoxes(amount) {
  
//}



//getCreateButton.addEventListener('click', onCreateBoxes);
//getDestroyButton.addEventListener('click', onDectroyButton);
//getControlAmount.addEventListener('input', onInput);

 //function onInput(e) {
  // let numberArray = [];
  // const yyy = e.currentTarget.value;
  // numberArray.push(yyy);
  // console.log(numberArray);
 //}
//function onCreateBoxes() {

  //let numberArray = [];
  //for (let i = 1; i <= getControlAmount.value; i += 1) {
  //  numberArray.push(i);
  //};
  //console.log(numberArray);
  //const boxes = numberArray.map((number) => {
  //  const createBox  = document.createElement('div');
  //  const value = (20 + number * 10);
  //  createBox.style.width = `${value}px`;
  //  createBox.style.height = `${value}px`;
  //  createBox.style.backgroundColor = getRandomHexColor();
  //  return createBox;
  //  }); 
  //getColorBox.append(...boxes);
//};

//function onDectroyButton() {
//  getColorBox.innerHTML = '';
//  getControlAmount.value = '';
//}