import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy />;
}

// function Smiley({ isHappy }) {
//   let face = "happy";
//   if (!isHappy) {
//     face = "sad";
//   }
//   return <div>{face}</div>;
// }

// oder so:
function Smiley({ isHappy }) {
  return (
    <span aria-label={isHappy ? "A happy smiley" : "A sad smiley"}>
      {isHappy ? "😌" : "😭"}
    </span>
  );
}
