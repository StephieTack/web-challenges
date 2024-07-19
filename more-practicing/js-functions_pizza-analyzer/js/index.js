console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let diameter1 = pizzaInput1;
let diameter2 = pizzaInput2;

pizzaInput1.addEventListener("input", () => {
  // write your code here
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  area1 = (diameter1 / 2) ** 2 * Math.PI;
  area2 = (diameter2 / 2) ** 2 * Math.PI;
  output.innerHTML = Math.round(((area2 - area1) / area1) * 100);
}
calculatePizzaGain(diameter1, diameter2);

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay() {}

// Task 3
// define the function updateOutputColor here
