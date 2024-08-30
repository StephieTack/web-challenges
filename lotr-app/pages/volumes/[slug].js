import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/router";

export default function MovieDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  const currentMovie = volumes.find((movie) => movie.slug === slug);

  if (!currentMovie) {
    return <p>movie not fount</p>;
  }

  const { title, description, book } = currentMovie;

  return (
    <>
      <Link href="/volumes">← Back to All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={ordinal}>
            <h2>{ordinal}</h2>
            <p>{title}</p>
          </li>
        ))}
      </ul>
      <Image
        src="/../public/images/the-fellowship-of-the-ring.png"
        height={230}
        width={140}
        alt="Cover fellowship of the ring"
      />
      <div>
        <Link href="/volumes/the-two-towers">next</Link>
      </div>
    </>
  );
}
