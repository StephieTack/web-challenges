console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`The user is not found: ${response.status}`);
    }
    const contentType = response.headers.get("content-type");
    console.log(response);
    console.log(contentType);
    if (!contentType.includes("json")) {
      throw new Error(`Unvalid type of document: ${contentType}`);
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    const result = await fetchUserData(endpoint.url);

    if (result.error) {
      errorElement.textContent = result.error;
      userElement.innerHTML = "No user data available.";
    } else {
      const user = result.data;
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    }
  });
});

function add3Numbers(first, second, third) {
  const sum = first + second + third;
  return sum;
}

const firstSum = add3Numbers(1, 2, 3);
console.log(add3Numbers(1, 2, 4));
// the return value is stored in "firstSum", namely 6

const secondSum = add3Numbers(4, 123, 33);
// the return value is now stored in "secondSum", namely 160
console.log(secondSum);

function checkInputLength(i) {
  if (i.length > 3) {
    return true;
  } else {
    return false;
  }
}
console.log(checkInputLength("heyjo"));

function testFunction() {
  return "a returned string";
  console.log("I am never logged in the console.");
}
console.log(testFunction);
