import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, notActive] = useState(false);

  function handleClick() {
    notActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Remove like" : "Add like"}
      </button>
    </main>
  );
}
