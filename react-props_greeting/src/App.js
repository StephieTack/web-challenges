import "./styles.css";

function Greeting({ name, isCoach }) {
  let coach = null;
  if (isCoach) {
    coach = <span>hello coach</span>;
  }
  return (
    { Coach }
    {name}
  ) 
}

export default function App() {
  return (
    <>
      <Greeting name="Stephie" />
      <Greeting name="Andrea" />
    </>
  );
}

// {isCoach ? "Hello" + }
