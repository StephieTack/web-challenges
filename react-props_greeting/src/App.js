// import "./styles.css";

// function Greeting({ name, isCoach }) {
//   let coach = null;
//   if (isCoach) {
//     coach = <span>hello coach</span>;
//   }
//   return (
//     { Coach }
//     {name}
//   )
// }

// export default function App() {
//   return (
//     <>
//       <Greeting name="Stephie" />
//       <Greeting name="Andrea" />
//     </>
//   );
// }

// // {isCoach ? "Hello" + }

import "./styles.css";

<<<<<<< HEAD
// mein Ansatz
// function Greeting({ name, isCoach }) {
//   let coach = null;
//   if (isCoach) {
//     coach = <span>hello coach</span>;
//   }
//   return (
//     { Coach }
//     {name}
//   )
// }

// export default function App() {
//   return (
//     <>
//       <Greeting name="Stephie" />
//       <Greeting name="Andrea" />
//     </>
//   );
// }

// // {isCoach ? "Hello" + }


// Lösungsvariante 1:
// export default function App() {
//   return <Greeting name="Felix" />;
// }

// function Greeting({ name }) {
//   const coaches = ["Andrea", "Felix", "Stephie"];
//   return (
//     <h1>{coaches.includes(name) ? "Hello, Coach!" : `Hello, ${name}!`}</h1>
//   );
// }

// Lösungsvariante 2. Gefällt mir besser:
export default function App() {
  return (
    <>
      <Greeting name="Tobias" />
      <Greeting name="Johanna" isCoach />
    </>
  );
}

function Greeting({ name, isCoach }) {
  return <h1>Hello, {isCoach ? "Coach" : name}!</h1>;
}
=======
export default function App() {
  return <Greeting name="Felix" />;
}

function Greeting({ name }) {
  const coaches = ["Andrea", "Felix", "Stephie"];
  return (
    <h1>{coaches.includes(name) ? "Hello, Coach!" : `Hello, ${name}!`}</h1>
  );
}
>>>>>>> origin
