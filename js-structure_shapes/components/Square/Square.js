import { getRandomColor } from "../../utils/randomColor.js";

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    // square.style.backgroundColor = "#ccc";
    square.style.backgroundColor = getRandomColor();
  });
  return square;
}

export { createSquare };
