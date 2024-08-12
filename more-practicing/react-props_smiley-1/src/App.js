import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy />;
}

function Smiley({ isHappy }) {
  return <div>{isHappy ? "happy" : "unhappy"}</div>;
}
// function Smiley({ isHappy }) {
//   return (
//     <span>{isHappy ? "😌" : "😭"}</span>
//   );
// }
