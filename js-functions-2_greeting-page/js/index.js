console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const displayyy = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const currentDate = new Date();
  // Die aktuelle Stunde abrufen
  const currentHour = currentDate.getHours();

  if (currentHour < 12) {
    return "Good mooorning";
  } else if (currentHour < 18) {
    return "Good afternoon";
  } else if (currentHour < 22) {
    return "Good evening";
  } else if (currentHour < 5) {
    return "Good night";
  }
}

function getDayColor() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  console.log(currentDay);

  if (currentDay === 1) {
    return "darkgrey";
  } else if (
    currentDay === 2 ||
    currentDay === 3 ||
    currentDay === 4 ||
    currentDay === 5
  ) {
    return "lightblue";
  } else if (currentDay === 6 || currentDay === 0) {
    // Sunday is 0
    return "hotpink";
  }
}

displayyy.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();

function sum(a, b) {
  return a + b;
}
const value = sum(1, 2);
console.log(sum);
