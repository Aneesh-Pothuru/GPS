import styled from "styled-components";

export const StyledButton = styled.button`
  min-width: 100px;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 35px;
  padding: 0 15px 0 15px;
  font-size: 20px;
  background-color: #063D54;
  color: white;
  font-weight: bolder;
  border: 1px solid #282C34;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  &:hover {
    background-color: #00B0C0;
    color: white;
    border: 1px solid #282C34;
    transition: background-color 0.5s ease-out;
  }
`;