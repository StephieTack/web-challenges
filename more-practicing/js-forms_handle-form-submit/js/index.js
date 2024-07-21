console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  event.target.elements.firstName.focus();

  event.target.reset();

  // console.log(data);
  // console.log(data.age);
  // console.log(data.badness);

  const ageNumber = Number(data.age);
  const badnessNumber = Number(data.badness);

  const ageBadnessSum = ageNumber + badnessNumber;
  console.log("age badness sum is: " + ageBadnessSum);
});

// Eingaben werden als STrings zurückgegeben, daher ist eine Konvertierung notwendig:
// const num3 = Number(str3);
// console.log(num3); // Ausgabe: 123
