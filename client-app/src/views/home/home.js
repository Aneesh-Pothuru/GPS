import React from "react";
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { HomeContainer, Logo, Options, StyledButton } from "./home.styles";

const Home = () => {
    const navigate = useNavigate();
    return(
        <HomeContainer>
            <Logo src={logo} alt="GPS" />
            <p>Simple Delivery and Log System</p>
            <Options>
                <StyledButton label="Check Inventory" onClick={() => navigate('/inventory')}/>
                <StyledButton label="Deliver Items" onClick={() => navigate('/deliver')} />
                <StyledButton label="Read Logs" onClick={() => navigate('/log')}/>
            </Options>
        </HomeContainer>
    )
}

export default Home;