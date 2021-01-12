import styled, { css } from "styled-components";

const BotãoContent = styled.div `
    
    ${(props) => props.entrar && css `
        button {
            background-color: black;
            color: white;
        }
        button:hover{
            color: black;
        }
    `};

    ${(props) => props.sair && css `
        button {
            background-color: white;
            color: black;
        }
    `}
`

export default BotãoContent;