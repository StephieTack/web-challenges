// import Link from "next/link";
// import { volumes } from "@/lib/data";
// import Image from "next/image";

// export default function TheTwoTowers() {
//   // Angenommen, du möchtest das Volume mit dem slug "the-fellowship-of-the-ring" anzeigen
//   const volumeSlug = "the-two-towers"; // Der gewünschte Slug
//   const volume = volumes.find((vol) => vol.slug === volumeSlug); // Finde das Volume mit dem Slug

//   // Überprüfen, ob das Volume existiert
//   if (!volume) {
//     return <p>Volume not found</p>;
//   }

//   return (
//     <>
//       <Link href="/volumes">← Back to All Volumes</Link>
//       <h1>{volume.title}</h1>
//       <p>{volume.description}</p>
//       {/* Mapping über das books Array innerhalb des gefundenen Volumes */}
//       <ul>
//         {volume.books.map((book) => (
//           <li key={book.ordinal}>
//             <h2>{book.ordinal}</h2>
//             <p>{book.title}</p>
//           </li>
//         ))}
//       </ul>
//       <Image
//         src="/../public/images/the-two-towers.png"
//         height={230}
//         width={140}
//         alt="Cover The two towers"
//       />
//       <div>
//         <Link href="/volumes/the-fellowship-of-the-ring">previous</Link>{" "}
//         <Link href="/volumes/the-return-of-the-king">next</Link>
//       </div>
//     </>
//   );
// }
