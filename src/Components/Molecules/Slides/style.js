import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const useStyles = makeStyles({
  root: {
    width: "30vw",
    height: "25vh",
    backgroudColor: "#EFDCBD",
  },
});

export const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50vw;
  height: 25vh;
  margin: 0 auto;

  .MuiCardContent-root {
    height: 170px;
  }
`;
