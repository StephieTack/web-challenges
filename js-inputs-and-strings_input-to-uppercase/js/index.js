console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

const inputField = document.querySelector('[data-js="first-input"]');
const testButton = document.querySelector('[data-js="button-uppercase"]');

// falscher Weg von mir
// testButton.addEventListener("click", () => {
//     function toUpperCase
// })

// falscher Weg von mir, versuch zwei
// function convertByClick(){
//     inputField.addEventListener("click", () => {
//         const oldValue = inputField.value;
//         const newValue = oldValue.toUpperCase();
//         inputField.value = newValue;
//       });
// }

// convertByClick();

testButton.addEventListener("click", () => {
  const oldValue = inputField.value;
  const newValue = oldValue.toUpperCase();
  inputField.value = newValue;
});
