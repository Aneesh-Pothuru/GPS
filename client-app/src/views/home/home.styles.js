import styled from "styled-components";
import Button from "../../components/button/button";

export const HomeContainer = styled.header`
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(15px + 2vmin);
    color: white;
`;

export const Logo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: MoveUpDown 1s linear infinite;

    @keyframes MoveUpDown {
        0%, 100% {
          transform: translateY(20);
        }
        50% {
          transform: translateY(-20px);
        }
    }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
    margin: 10px;
`;
