import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  height: 50vh;

  width: 100vw;
  max-width: 100%;

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
