import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>hello</h1>
      <p>dies ist der p-tag-text</p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
