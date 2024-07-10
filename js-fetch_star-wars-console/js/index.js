console.clear();

const url = "https://swapi.py4e.com/api/people";

//Variante 1 mit einer Funktion
// async function fetchData() {
//   const response = await fetch(url);
//   const data = await response.json();
// console.log(response);
// console.log(data);
// console.log(data.results[0].name)
// }

// Variante 2 mit ausgegebenem Wert in einem Return und einem neuen Funktionsaufruf außerhalb
async function fetchData() {
  const response = await fetch(url);
  return await response.json();
}

fetchData();

async function showData() {
  const data = await fetchData();
  console.log(data);
  console.log(data.results[2].eye_color);
  data.results.forEach((person) => {
    console.log(person.name);
    console.log(`${data.results[2].name}, ${data.results[2].eye_color}`);
  });
}

// data.find((color) => color.startsWith("g"));

showData();
