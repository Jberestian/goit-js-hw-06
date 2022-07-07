const inputValidationsEl = document.querySelector("#validation-input");

console.log(inputValidationsEl);

const lengthInputEl = Number(inputValidationsEl.dataset.length);

inputValidationsEl.addEventListener("blur", () => {
  if (inputValidationsEl.value.length === lengthInputEl) {
    inputValidationsEl.classList.remove("invalid");
    inputValidationsEl.classList.add("valid");
  } else {
    inputValidationsEl.classList.remove("valid");
    inputValidationsEl.classList.add("invalid");
  }
});
