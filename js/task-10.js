const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const destroyBoxes = () => {
  newDivEl.remove();
};

const createBoxes = () => {
  const createDivEl = divBoxEl.append(newDivEl);

  newDivEl.style.backgroundColor = randomColor();
  newDivEl.style.margin = "auto";
  newDivEl.style.width = "30px";
  newDivEl.style.height = "30px";
};

const divBoxEl = document.querySelector("#boxes");
const newDivEl = document.createElement("DIV");
const createBtnEl = document.querySelector("button[data-create]");
const deleteBtnEl = document.querySelector("button[data-destroy]");

createBtnEl.addEventListener("click", createBoxes);

deleteBtnEl.addEventListener("click", destroyBoxes);
