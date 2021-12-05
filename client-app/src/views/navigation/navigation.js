import React from "react";
import {
  Header,
  LeftOptions,
  RightOptions,
  LinkStyled,
} from "./navigation.styles";

const Navigation = () => {
    return (
      <Header>
        <LeftOptions>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/deliver">Deliver</LinkStyled>
          <LinkStyled to="/log">Logs</LinkStyled>
          <LinkStyled to="/inventory">Inventory</LinkStyled>
        </LeftOptions>
        <RightOptions>
          <LinkStyled to="/about">About</LinkStyled>
        </RightOptions>
      </Header>
    );
  };
  
  export default Navigation;