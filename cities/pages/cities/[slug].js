import { useRouter } from "next/router";
import { cities } from "../lib/data";

export default function CityDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("router:", router);
  console.log("slug:", slug);

  const currentCity = cities.find((city) => city.slug === slug);

  if (!currentCity) {
    return <p>City not found</p>;
  }

  return (
    <>
      <h1>{currentCity.name}</h1>
      <h2>Country: {currentCity.country}</h2>
      <p>{currentCity.description}</p>
    </>
  );
}
