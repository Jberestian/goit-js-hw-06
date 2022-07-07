const fontSizeInputEl = document.querySelector("#font-size-control");
const fontSizeContrlEl = document.querySelector("#text");

fontSizeInputEl.addEventListener("input", event => {
  fontSizeContrlEl.style.fontSize = `${event.target.value}px`;
});
