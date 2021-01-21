import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopup = styled(Popup)`
  &-overlay {
    height: 100vh;
    width: 100vw;
    background: rgba(10, 11, 11, 0.5);
  }

  &-content {
    height: 50%;
    width: 20%;
    background: #17223a;
    border: 5px solid #efdcbd;
    border-radius: 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #efdcbd;
    margin: 0;
  }
  label {
    color: grey;
  }
  p {
    color: #efdcbd;
  }
  button {
    width: 40%;
  }
`;
