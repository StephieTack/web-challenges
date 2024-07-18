import React from "react";
import "./styles.css";

function ArticleComponent() {
  return (
    <article className="article">
      <h2 className="article__title">dies ist meine überschrift</h2>
      <label htmlFor="input_id"></label>
      <input id="input_id"></input>
      <a className="article__link" href="https://www.wikipedia.de">
        a tag
      </a>
    </article>
  );
}

export default function App() {
  return <ArticleComponent />;
}
