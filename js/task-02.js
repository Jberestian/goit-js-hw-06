const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulItemEl = document.querySelector("#ingredients");

const ingredientsEL = ingredients.map((el) => {
  const createLiEl = document.createElement("li");
  createLiEl.className = "item";
  createLiEl.textContent = el;

  return createLiEl;
});

ulItemEl.append(...ingredientsEL);

// console.log(ingredientsEL);
