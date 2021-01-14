import styled from "styled-components";

export const FiltersContent = styled.section `
    width: 75vw;
    height: 24vh;
    margin-left: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .checkBox-content {
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: 3px solid lightyellow;
    }
    .selects-content {
        width: 90%;
        display:flex;
        margin-bottom: 3px;
        align-items: center;
        justify-content: center;
    }
    .searchInput-content {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        border: 3px solid lightyellow;
    }
`