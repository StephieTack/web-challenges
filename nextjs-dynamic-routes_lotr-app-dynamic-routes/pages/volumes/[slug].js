import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function MovieDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Finde den aktuellen Film direkt anhand des Slugs
  const currentMovie = volumes.find((movie) => movie.slug === slug);

  // Wenn der Film nicht gefunden wird, zeige eine Fehlermeldung oder leere Seite an
  if (!currentMovie) {
    return <p>Movie not found</p>;
  }

  // Bestimme das nächste und vorherige Volume
  const currentMovieIndex = volumes.indexOf(currentMovie);
  const nextMovie = volumes[currentMovieIndex + 1];
  const previousMovie = volumes[currentMovieIndex - 1];

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{currentMovie.title}</h1>
      <p>{currentMovie.description}</p>
      <ul>
        {currentMovie.books.map((book) => (
          <li key={book.title}>
            {book.ordinal}: <strong>{book.title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={currentMovie.cover}
        alt={`Cover image of ${currentMovie.title}`}
        width={140}
        height={230}
      />
      {previousMovie ? (
        <div>
          <Link href={`/volumes/${previousMovie.slug}`}>
            ← Previous Volume: {previousMovie.title}
          </Link>
        </div>
      ) : null}
      {nextMovie ? (
        <div>
          <Link href={`/volumes/${nextMovie.slug}`}>
            Next Volume: {nextMovie.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
