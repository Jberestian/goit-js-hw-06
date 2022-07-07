const inputTextEl = document.querySelector("#name-input");
const spanTexnValueEl = document.querySelector("#name-output");

inputTextEl.addEventListener("input", (event) => {
  spanTexnValueEl.textContent = event.target.value;

  if (event.target.value.length > 0) {
    spanTexnValueEl.innerHTML = event.target.value;
    return;
  }
  spanTexnValueEl.innerHTML = "Anonymous";
});
