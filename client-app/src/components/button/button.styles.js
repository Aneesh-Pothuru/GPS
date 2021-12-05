import styled from "styled-components";

export const StyledButton = styled.button`
  min-width: 100px;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 35px;
  padding: 0 15px 0 15px;
  font-size: 15px;
  background-color: #9836f6;
  color: white;
  font-weight: bolder;
  border: 1px solid #011f30;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  &:hover {
    background-color: #6423a1;
    color: white;
    border: 1px solid #011f30;
    transition: background-color 0.5s ease-out;
  }
`;