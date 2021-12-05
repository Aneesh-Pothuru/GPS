import styled, { css } from "styled-components";

const descriptionMainColor = "white";
const descriptionSubColor = "gray";
const userInputColor = "black";

const filledStyles = css`
  top: -25px;
  font-size: 18px;
  color: ${descriptionMainColor};
`;

export const Container = styled.div`
  position: relative;
  margin: 45px 0;
  margin-left: 41.5vw;
  input[type="password"] {
    letter-spacing: 0.2em;
  }
`;

export const InputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${userInputColor};
  font-size: 18px;
  padding: 10px 10px 10px 10px;
  display: block;
  width: 30%;
  border: none;
  border-radius: 0;
  border: 1px solid grey;
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${filledStyles}
  }
`;

export const LabelContainer = styled.label`
  color: ${descriptionSubColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.filled {
    ${filledStyles}
  }
`;