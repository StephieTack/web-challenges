import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setCoords({
      longitude: data.longitude,
      latitude: data.latitude,
    });
  }

  useEffect(() => {
    const id = setInterval(getISSCoords, 5000);
    getISSCoords();

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}

// useEffect(() => {
//   console.log("I am running in the useEffect");
//   async function getJoke() {
//     const response = await fetch(
//       `https://example-apis.vercel.app/api/bad-jokes/${id}`
//     );
//     const data = await response.json();
//     console.log("data:", data);
//     setJoke(data);
//   }

//   getJoke();
// }, [id]);
