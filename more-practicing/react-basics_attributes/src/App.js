import React from "react";
import "./styles.css";

export default function App() {
  return <MyFunction />;
}

function MyFunction() {
  return (
    <article className="article">
      <h2 className="article__title">Heading 2</h2>
      <label htmlFor="article">This is a Label</label>
      <input id="article" placeholder="text hier"></input>
      <a
        href="https://www.wikipedia.de"
        target="blank"
        className="article__link"
      >
        Wikiartikel hier zu sehen
      </a>
    </article>
  );
}

// - an `<article>` as a wrapper HTML element with the class `article`
// - an `<h2>` with the class `article__title` and a text of your choice
// - a `<label>` and `<input>` tag connected with `id` and `htmlFor` (!) attributes
// - an `<a>` tag with the class `article__link` as well as text content and `href` attribute of your choice (What about a Wikipedia article?)
