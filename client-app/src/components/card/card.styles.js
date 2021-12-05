import styled from  "styled-components";

export const CardContainer = styled.div`
    display: flex;
    padding: 5px;
    padding-top: 25px;
    padding-bottom: 25px;
    flex-direction: column;
    border-radius: 5px;
    border: 3px solid #041E42;
    background-position: center;
    background-color: #00B0C0;
    background-size: cover;
    cursor: pointer;
    transform: translateZ(0);
    transition: transform 0.5s ease-out;
    :hover{
        transform: scale(1.05);
      }
`;