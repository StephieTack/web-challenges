import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Console: You clicked me!");
  }
  function handleClick2() {
    alert("Alertpopup: You clicked me!");
  }

  return (
    <>
      <Button color="green" text="Submit" onClick={handleClick} />
      <Button color="red" text="Cancel" onClick={handleClick2} />
      <Button color="grey" text="Reset" disabled />
      <Button color="grey" text="Hidden" hidden />
    </>
  );
}

function Button({ color, disabled, text, hidden, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      hidden={hidden}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
