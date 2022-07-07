const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const decremetnBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const spanValueEl = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  spanValueEl.textContent = counterValue;
};

incrementBtnEl.addEventListener("click", increment);
// console.log(incrementBtnEl);

const decrement = () => {
  counterValue -= 1;
  spanValueEl.textContent = counterValue;
};

decremetnBtnEl.addEventListener("click", decrement);
// console.log(decremetnBtnEl);
