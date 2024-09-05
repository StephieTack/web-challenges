import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lights, handleToggle }) {
  return (
    <StyledLights>
      {lights.map((light) => (
        <Light
          key={light.id} // Einzigartiger Schlüssel für jedes Light-Element
          light={light.name} // Name des Lichts
          isOn={light.isOn} // Zustand des Lichts (ein/aus)
          onToggle={() => handleToggle(light.id)} // Toggle-Funktion mit dem entsprechenden Licht-ID
        />
      ))}
    </StyledLights>
  );
}
