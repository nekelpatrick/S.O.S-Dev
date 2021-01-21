import styled from "styled-components";

export const Form = styled.form`
  height: 60%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    border-radius: 10px;
    margin-top: 3px;
    margin-bottom: 3px;
    div {
      input {
        background-color: white;
        border-radius: 10px;
      }
    }
  }

  label {
    color: grey;
  }
`;
