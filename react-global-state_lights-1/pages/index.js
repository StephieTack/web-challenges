import Link from "../components/Link";

export default function HomePage({ countLights, handleToggle }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{countLights} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions" handleToggle={handleToggle}>
          Quick Actions →
        </Link>
      </p>
    </div>
  );
}
