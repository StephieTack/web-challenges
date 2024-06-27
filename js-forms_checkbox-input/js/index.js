console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
//  new constant for success message
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// new functions for sucess message
function hideTosSuccess() {
  successMessage.setAttribute("hidden", "");
}

function showTosSuccess() {
  successMessage.removeAttribute("hidden");
}

// prevents to show the error and success messages while opening the page
document.addEventListener("DOMContentLoaded", () => {
  hideTosError();
});

document.addEventListener("DOMContentLoaded", () => {
  hideTosSuccess();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v-

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  // decides if an error or sucessmessage is shown or not, based on the checkbox

  const statusCheckbox = data.tos;
  if (statusCheckbox) {
    console.log("button is on");
    hideTosError();
    showTosSuccess();
  } else {
    console.log("button not checked");
    showTosError();
    hideTosSuccess();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
