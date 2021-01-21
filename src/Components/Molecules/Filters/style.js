import styled from "styled-components";

export const FiltersContent = styled.section `
    width: 60vw;
    height: 18vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    border: 1px solid lightyellow;

    .checkBox-content {
        width: 100%;
        height: 33%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

    }
    .selects-content {
        width: 54%;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .searchInput-content {
        width: 60%;
        height: 42%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    @media screen and (max-width: 600px) {
        margin: 0 auto;
        width: 90%;
        flex-direction: row;
        justify-content: space-between;

        .checkBox-content {
            flex-direction: column;
        }
        .selects-content {
            width: 90%;
        }
        .MuiSvgIcon-root {
            font-size: 0.8rem;
        }

        .searchInput-content {
            width: 100%;
            justify-content: space-around;
            flex-direction: column;
        }

    }
`