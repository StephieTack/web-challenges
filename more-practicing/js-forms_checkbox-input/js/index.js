console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked === false) {
    showTosError();
    return;
  } else {
    hideTosError();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

tosCheckbox.addEventListener("change", () => {
  // Fehlermeldung ausblenden, wenn die Checkbox aktiviert wird
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    // Falls erforderlich, Fehlermeldung wieder anzeigen, wenn die Checkbox deaktiviert wird
    showTosError();
  }
});
