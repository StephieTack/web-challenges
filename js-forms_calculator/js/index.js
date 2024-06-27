console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const inputfield = Object.fromEntries(formData);

  // const a = document.querySelector.input('#number-a');     didn't work
  // const b = document.querySelector.input('#number-b');    didn't work
  const numberA = Number(inputfield.numberA);
  const numberB = Number(inputfield.numberB);
  // const operator = form.elements['operator'].value;      worked aswell
  const operator = inputfield.operator;
  console.log("operator: ", operator);

  if (operator === "addition") {
    result = add(numberA, numberB);
  }
  if (operator === "subtraction") {
    result = subtract(numberA, numberB);
  }
  if (operator === "multiplication") {
    result = multiply(numberA, numberB);
  }
  if (operator === "division") {
    result = divide(numberA, numberB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
