import { StyledBox } from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <MyFlexDiv>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox isBlack />
    </MyFlexDiv>
  );
}

const MyFlexDiv = styled.div`
  display: flex;
`;
