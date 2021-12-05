import React from "react";
import { Container, InputContainer, LabelContainer } from "./input.styles";

const Input = ({ inputChange, label, ...properties }) => (
  <Container>
    <InputContainer onChange={inputChange} {...properties} />
    {label ? (
      <LabelContainer className={properties.value.length ? "filled" : ""}>
        {label}
      </LabelContainer>
    ) : null}
  </Container>
);

export default Input;