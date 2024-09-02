import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello to the cities App</h1>
      <Link href="/cities">Link to Cities Overview Page</Link>
    </div>
  );
}
