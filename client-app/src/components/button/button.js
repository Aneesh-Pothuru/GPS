import React from "react";
import { StyledButton } from "./button.styles";

const Button = ({ label, ...properties }) => {
  return <StyledButton {...properties}>{label}</StyledButton>;
};

export default Button;