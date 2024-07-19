console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let diameter1 = pizzaInput1.value;
let diameter2 = pizzaInput2.value;

pizzaInput1.addEventListener("input", () => {
  diameter1 = pizzaInput1.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza1, diameter1);
  updateOutputColor(diameter1, diameter2);
});

pizzaInput2.addEventListener("input", () => {
  diameter2 = pizzaInput2.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza2, diameter2);
  updateOutputColor(diameter1, diameter2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  area1 = (diameter1 / 2) ** 2 * Math.PI;
  area2 = (diameter2 / 2) ** 2 * Math.PI;
  output.innerHTML = Math.round(((area2 - area1) / area1) * 100);
  console.log(diameter2);
}
calculatePizzaGain(diameter1, diameter2);

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  const result = (newSize / 24) * 100;
  pizzaElement.style.width = `${result}px`;
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
  // so geht es auch:
  // outputSection.style.backgroundColor = `var(${
  //   size1 <= size2 ? "--green" : "--red"
  // }`;
  if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
