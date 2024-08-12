import React from "react";
import "./styles.css";

// beide Varianten gehen und hängen davon ab, wie flexibel der Inhalt des Buttons sein soll:
// ***************

export default function App() {
  return (
    <main>
      <Button>hello</Button>
      <Button>hi</Button>
      <Button>hoho</Button>
      <Button>hey</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

// export default function App() {
//   return (
//     <main>
//       <Button text="erster" />
//       <Button text="zweiter" />
//       <Button text="dritter" />
//       <Button text="vierter" />
//     </main>
//   );
// }

// function Button({ text }) {
//   return (
//     <button className="button" type="button">
//       {text}
//     </button>
//   );
// }
