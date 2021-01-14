import styled from "styled-components";

export const FiltersContent = styled.section `
    width: 75vw;
    height: 19vh;
    margin-left: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .checkBox-content {
        width: 20%;
        height: 100%;
        padding: 1% 1% 1% 0%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;

        border: 3px solid lightyellow;
    }
    .selects-content {
        width: 100%;
        display:flex;
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

export const Label = styled.label `
    color: lightyellow;
    margin-right: auto;
`