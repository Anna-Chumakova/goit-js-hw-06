const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};
const spanEl = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener("click", function () {
    counterValue.decrement();
    spanEl.textContent = counterValue.value;
});
btnIncrement.addEventListener("click", function () {
    counterValue.increment();
    spanEl.textContent = counterValue.value;
});
