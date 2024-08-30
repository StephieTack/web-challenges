import Link from "next/link";
import { introduction, volumes } from "@/lib/data";
import Router, { useRouter } from "next/router";

export default function MoviesList() {
  const router = useRouter();

  function getRandomElement(array) {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    console.log("randomElement:", randomElement);
    console.log("randomElement.slug:", randomElement.slug);

    router.push(`/volumes/${randomElement.slug}`);
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>

      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => getRandomElement(volumes)}>
        Get Random Volume
      </button>
    </>
  );
}
