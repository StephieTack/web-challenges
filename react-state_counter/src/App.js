import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setcount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setcount(count - 1);
            console.log("Buttons clicks reduced");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setcount(count + 1);
            console.log("Button clicks added");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
