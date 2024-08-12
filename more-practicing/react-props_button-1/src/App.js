import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }

  return (
    <>
      <Button color="blue" text="Hallo erster Button" onClick={handleClick} />
      <Button color="red" text="zweiter" disabled />
      <Button
        color="yellow"
        text="dritter"
        height="200px"
        onClick={handleClick}
      />
    </>
  );
}

function Button({ color, height = "100px", disabled, text, onClick }) {
  return (
    <button
      style={{ backgroundColor: color, height: height }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
