import { createCircle } from "./components/Circle/Circle.js";
import { createSquare } from "./components/Square/Square.js";
import { createPentagon } from "./components/Pentagon/Pentagon.js";

const root = document.getElementById("root");

root.append(createCircle(), createSquare(), createPentagon());
