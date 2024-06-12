const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("body.dark");
});
console.log(darkModeButton);
