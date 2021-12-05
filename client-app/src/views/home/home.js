import React from "react";
import logo from "../../assets/logo.png"
import Button from "../../components/button/button";
import { HomeContainer, Logo } from "./home.styles";

const Home = () => {
    return(
        <HomeContainer>
            <Logo src={logo} alt="GPS"/>
            <p>Simple Delivery and Log System</p>
            <Button label="Deliver Items" />
            <Button label="Check Logs" />
        </HomeContainer>
    )
}

export default Home;