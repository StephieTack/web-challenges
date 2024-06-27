console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);

  // FormData // 2 step process. get FormData,
  const formData = new FormData(event.target);
  // convert formData into an object
  const data = Object.fromEntries(formData);
  console.log("data:", data);

  event.target.reset();

  const formElements = event.target.elements;
  formElements.firstName.focus();

  console.log("Badness:", badness);
  console.log("Age:", age);

  const result = Number(data.age) + Number(data.badness);
  console.log(result);

  console.log(`The age-badness-sum of ${data.firstName} is ${result}`);
});
