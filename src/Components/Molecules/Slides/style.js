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
  justify-content: center;
  width: 50vw;
  height: 25vh;
  margin: 0 auto;

  .MuiCardContent-root {
    height: 170px;
    border: 2px solid #efdcbd;
    background-color: #17223a;
  }
`;
