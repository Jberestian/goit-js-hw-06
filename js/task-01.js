const listEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listEl.length}`);

for (const el of listEl) {
  console.log(
    `Category: ${el.firstElementChild.textContent} 
    Elements: ${el.querySelectorAll("li").length}`
  );
}
