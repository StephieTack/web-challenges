console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r133";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  // true path
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  // false path
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 999999;

if (numberOfHotdogs < 5) {
  console.log("Kosten 2 Euro");
} else if (numberOfHotdogs < 100) {
  console.log("Kosten 1,50 Euro");
} else if (numberOfHotdogs < 1000000) {
  console.log("Kosten 1 Euro");
} else {
  console.log("Kosten 0,10 Euro");
}

// Part 4: Daytime
const currentHour = 18;

const statement = currentHour < 17 ? "still need to learn." : "Partytime.";
console.log(statement);

// Part 5: Greeting
const userName = "Stephie";
const coach = "Archibald";

// Variante 1
const greeting = "Hello " + (coach === userName ? "coach" : userName) + "!";
console.log(greeting);

// Variante 2
const greeting = coach === userName ? "hi coach." : "hello " + userName + "!";
console.log(greeting);

// Variante 3
const greeting = userName === coach;

if (userName === coach) {
  console.log("Hello Coach");
} else if (userName !== coach) {
  console.log("Hello " + userName);
}
