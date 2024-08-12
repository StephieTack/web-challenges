import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Stephie" />
      <Greeting name="Tacki" />
    </div>
  );
}

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
