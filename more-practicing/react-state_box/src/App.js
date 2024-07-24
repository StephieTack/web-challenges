import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  // a way how to render the state in the console correct:
  // function handleClick() {
  //   const newActiveState = !isActive;
  //   setActive(newActiveState);
  //   // Log the new state
  //   console.log(newActiveState);
  // }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
