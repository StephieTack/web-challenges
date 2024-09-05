// Version mit Zwischenkomponente, die die Props annimmt:

// import styled from "styled-components";

// export default function BoxWithStyledComponents({ isBlack }) {
//   return <StyledBox isBlackBackground={isBlack} />;
// }

// const StyledBox = styled.div`
//   width: 100px;
//   height: 100px;
//   margin: 2rem;
//   background-color: ${({ isBlackBackground }) =>
//     isBlackBackground ? "black" : "green"};

//   &:hover {
//     background-color: red;
//   }
// `;

// direkt gestylte Komponente:
import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${({ isBlack }) => (isBlack ? "black" : "green")};

  &:hover {
    background-color: red;
  }
`;
