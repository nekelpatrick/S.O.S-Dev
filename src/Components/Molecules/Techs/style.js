import styled from "styled-components";
import Popup from "reactjs-popup";

export const TechsContent = styled.div `
    width: 18vw;
    height: 36vh;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    /* border: 4px solid lightyellow; */
    /* border-radius: 9px; */

    h6 {
        text-align: center;
        font-size: 1.8rem;
        color: lightyellow;
    }

    #icon {
        font-size: 3rem !important;
    }

    .form-content {
        width: 81%;
        height: 81%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const StyledPopup = styled(Popup)`
  &-overlay {
    height: 100vh;
    width: 100vw;
    background: rgba(10, 11, 11, 0.5);
  }

  &-content {
    width: 18vw;
    height: 36vh;
    background: #17223a;
  }
  
`;

