import styled from "styled-components";

export default function BoxWithClassName({ isBlack }) {
  return (
    <div
      className={`box-with-classname${
        isBlack ? " box-with-classname--black" : ""
      }`}
    ></div>
  );
}
