import "./styles.css";

function ArticleComponent() {
  return (
    <article className="article">
      <h2 className="article__title">dies ist meine überschrift</h2>
      <label htmlFor="input_id">label</label>
      <input placeholder="hier kommt text rein" id="input_id" />
      <a href="https://www.wikipedia.de" className="article__link">
        Link to Wikipedia
      </a>
    </article>
  );
}

export default function App() {
  return <ArticleComponent />;
}
