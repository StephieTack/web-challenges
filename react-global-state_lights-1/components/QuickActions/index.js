import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  handleToggle,
  turnAllLightsOn,
  turnAllLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          console.log("Turn all lights off");
          handleToggle();
          turnAllLightsOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          console.log("Turn all lights on");
          handleToggle();
          turnAllLightsOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
