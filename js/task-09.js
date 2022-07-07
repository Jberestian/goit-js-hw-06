function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector(".change-color");

const spanValueNameEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", () => {
  const bodyEl = document.querySelector("body");
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;

  spanValueNameEl.textContent = `${bodyEl.style.backgroundColor}`;
});
