import styled from "styled-components";

export const Card = styled.div`
  height: 40%;
  width: 25%;
  margin: 0 20px;
  border: 2px solid #efdcbd;
  border-radius: 5px;
  background-color: #17223a;
`;

export const CardInfo = styled.div`
  height: 30%;
  width: 100%;
  padding: 20px 0 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h3 {
    margin: 0 0 0 10px;
    font-size: 1.5em;
  }
`;
export const CardContent = styled.div`
  height: 70%;
  padding: 20px 20px 10px 20px;

  p {
    margin: 0;
    font-size: 1.3em;
  }
`;

export const AspasCima = styled.div`
  height: 55%;
`;

export const AspasBaixo = styled(AspasCima)`
  display: flex;
  align-items: flex-end;
`;
