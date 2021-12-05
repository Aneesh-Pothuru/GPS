import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const cursor = css`
  cursor: pointer;
  color: white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const RightOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LinkStyled = styled(Link)`
  padding: 20px;
  text-decoration: none;
  ${cursor}
`;