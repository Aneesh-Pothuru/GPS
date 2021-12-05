import React from "react";
import { CardContainer } from "./card.styles";


const Card = ({info}) => {
    return(
        <CardContainer>
            {info}
        </CardContainer>
    )
}

export default Card;