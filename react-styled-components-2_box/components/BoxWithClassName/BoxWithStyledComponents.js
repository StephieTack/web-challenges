import styled from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
  return <StyledBox isBlackBackground={isBlack} />;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${({ isBlackBackground }) =>
    isBlackBackground ? "black" : "green"};

  &:hover {
    background-color: red;
  }
`;
