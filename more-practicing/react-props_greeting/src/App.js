import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Alex" />
      <Greeting name="Felix" />
    </>
  );
}

// function Greeting({ name }) {
//   // Hier wird überprüft, ob der Name "Felix" ist und entsprechend die Begrüßung angepasst
//   const greetingMessage =
//     name === "Felix" ? "Hello, Coach!" : `Hello, ${name}!`;

//   return <p>{greetingMessage}</p>;
// }

// function Greeting({ name }) {
//   const isCoach = (name) => {
//     if (name === "Felix") {
//       return "Hello, Coach!";
//     }
//     return `Hello, ${name}!`;
//   };

//   return <p>{isCoach(name)}</p>;
// }

// mehrere coaches abfragen:

function Greeting({ name }) {
  const coaches = ["Felix", "Alex"];

  const isCoach = (name) => {
    if (coaches.includes(name)) {
      return "Hello, Coach!";
    }
    return `Hello, ${name}!`;
  };

  return <p>{isCoach(name)}</p>;
}
