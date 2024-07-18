const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add some functionality to the buttons on this page. When pressing a button, the corresponding color should be applied to the box.
  1: Create a function removeAllColors which removes all color classes from the box.
  2: Create a function addColor which takes a class name as a parameter and adds the class to the box.
  3: Use the two functions in the event listeners of the buttons to color in the box when the button is clicked.
*/

redButton.addEventListener("click", () => {
  // use your functions to
  // - remove all classes
  // - then add the class name: "red"
  removeAllColors();
  addNewColor("red");
});

blueButton.addEventListener("click", () => {
  // use your functions to
  // - remove all classes
  // - then add the class name: "blue"
  removeAllColors();
  addNewColor("blue");
});

greenButton.addEventListener("click", () => {
  // use your functions to
  // - remove all classes
  // - then add the class name: "green"
  removeAllColors();
  addNewColor("green");
});

grayButton.addEventListener("click", () => {
  // use your functions to
  // - remove all classes
  // - then add the class name: "gray"
  removeAllColors();
  addNewColor("gray");
});

// Write your two functions below:
function removeAllColors() {
  box.classList.remove("red", "green", "blue", "gray");
}

function addNewColor(wishedColor) {
  box.classList.add(wishedColor);
}
