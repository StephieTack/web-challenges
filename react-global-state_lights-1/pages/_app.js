import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  // geht auch und wäre sicherer, ist für mich aber nicht so verständlich:
  // function handleToggle(id) {
  //   // Wir erstellen eine neue Liste, indem wir die bestehende Liste der Lichter durchgehen
  //   setLights((previousLights) =>
  //     previousLights.map((light) =>
  //       // Wenn die ID des aktuellen Lichts mit der übergebenen ID übereinstimmt,
  //       // ändern wir den Zustand dieses Lichts (von an zu aus oder umgekehrt)
  //       light.id === id
  //         ? { ...light, isOn: !light.isOn } // Der Zustand des Lichts wird umgeschaltet
  //         : light
  //     )
  //   );
  // }

  // so ist es in der Demo gemacht worden:

  function handleToggle(id) {
    setLights(
      lights.map((light) => {
        return light.id === id ? { ...light, isOn: !light.isOn } : light;
      })
    );
  }

  const countLights = lights.filter(({ isOn }) => isOn).length;

  function turnAllLightsOn() {
    setLights((lights) => lights.map((light) => ({ ...light, isOn: true })));
    console.log("on");
  }

  function turnAllLightsOff() {
    setLights((lights) => lights.map((light) => ({ ...light, isOn: false })));
    console.log("off");
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleToggle={handleToggle}
        lights={lights}
        countLights={countLights}
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
      />
    </Layout>
  );
}
