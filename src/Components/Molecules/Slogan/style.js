import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  width: 70vw;
  max-width: 100%;
  margin: 0 auto;

  .sloganbutton {
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      margin-bottom: 6vh;
    }
  }

  .pessoas {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
  }
`;
export default StyledContainer;
