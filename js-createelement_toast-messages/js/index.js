// MY VARIANT:
// console.clear();

// const toastContainer = document.querySelector('[data-js="toast-container"]');
// const addButton = document.querySelector('[data-js="add-button"]');
// const clearButton = document.querySelector('[data-js="clear-button"]');

// addButton.addEventListener("click", () => {
//   // Exercise: Append a new entry to the toast messages container
//   const newElement = document.createElement("li");
//   console.log(newElement);
//   toastContainer.append(newElement);
//   console.log(toastContainer);
//   newElement.textContent = "I am a Toastmessage from stephie";
//   newElement.classList.add("toast-container__message");
// });

// clearButton.addEventListener("click", () => {
//   // Exercise: Clear the stack of toast messages
//   toastContainer.textContent = "";
// });

console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

function addToast(message) {
  const toast = document.createElement("li");
  toast.classList.add("toast-container__message");
  toast.textContent = message;
  toastContainer.append(toast);
}

addButton.addEventListener("click", () => {
  // Not necessary for the challenge, just adding some flavor.
  const date = new Date().toDateString();
  const message = `A new message! Received at: ${date}`;

  addToast(message);
});

function clearToasts() {
  toastContainer.innerHTML = "";
}

clearButton.addEventListener("click", () => {
  clearToasts();
});
