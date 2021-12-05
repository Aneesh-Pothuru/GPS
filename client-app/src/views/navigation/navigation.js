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
          <LinkStyled to="/inventory">Inventory</LinkStyled>
          <LinkStyled to="/deliver">Deliver</LinkStyled>
          <LinkStyled to="/log">Logs</LinkStyled>
        </LeftOptions>
        <RightOptions>
        </RightOptions>
      </Header>
    );
  };
  
  export default Navigation;