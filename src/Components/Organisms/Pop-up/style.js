import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopup = styled(Popup)`
  &-overlay {
    height: 100vh;
    width: 100vw;
    background: rgba(10, 11, 11, 0.5);
  }

  &-content {
    height: 60%;
    width: 30%;
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

  h1,
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
    margin-top: 10px;
  }
  input {
    color: black;
  }
`;
