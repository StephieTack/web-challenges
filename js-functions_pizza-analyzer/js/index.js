console.clear();
const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');
const output = document.querySelector('[data-js="output"]');
pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  // const size1 = pizzaInput1.value;
  // const size2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});
pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  // const size1 = pizzaInput1.value;
  // const size2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});
// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const radius1 = diameter1 / 2;
  const radius2 = diameter2 / 2;
  const area1 = Math.PI * Math.pow(radius1, 2);
  const area2 = Math.PI * Math.pow(radius2, 2);
  console.log(area1, area2);
  const pizzaGain = ((area2 - area1) / area1) * 100;
  console.log(pizzaGain);
  output.textContent = Math.round(pizzaGain);
}
// Task 2
function updatePizzaDisplay(pizzaElement, newSize) {
  const newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = newDisplaySize + "px";
}
// Task 3
// define the function updateOutputColor here
function updateOutputColor(pizzaSize1, pizzaSize2) {
  if (pizzaSize2 < pizzaSize1) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
