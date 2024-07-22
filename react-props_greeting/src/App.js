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

export default function App() {
  return <Greeting name="Felix" />;
}

function Greeting({ name }) {
  const coaches = ["Andrea", "Felix", "Stephie"];
  return (
    <h1>{coaches.includes(name) ? "Hello, Coach!" : `Hello, ${name}!`}</h1>
  );
}
