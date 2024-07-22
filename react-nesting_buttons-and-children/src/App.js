import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>button 1</Button>
      <Button>b2</Button>
      <Button>b3</Button>
      <Button>b4</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
