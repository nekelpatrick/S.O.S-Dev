import StyledContainer from "./style";

import Image from "../../Atoms/Image";
import Button from "../../Atoms/Button";

import { useMediaQuery, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: { flexGrow: 1 },
}));

const Slogan = ({ slogan, img, img2 }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {isMobile ? (
        <Grid
          container
          className={classes.container}
          justify="center"
          alignItems="center"
          style={{ marginBottom: "15px" }}
        >
          <Grid item xs={12} align="center" style={{ marginTop: "10px" }}>
            <Image height="185px" width="305px" src={slogan} />
          </Grid>

          <Grid item xs={12} align="center" style={{ marginTop: "10px" }}>
            <Image src={img} width="210px" />
          </Grid>
          <Grid item xs={12} align="center" style={{ marginTop: "15px" }}>
            <Button text="Saiba Mais" classe="buttonSaibaMais" />
          </Grid>

          <Grid item xs={12} align="center" style={{ marginTop: "20px" }}>
            <Image width="210px" src={img2} />
          </Grid>
        </Grid>
      ) : (
        <StyledContainer>
          <div className="sloganbutton">
            <Image width="21vw" height="auto" src={slogan} />
            <Button text="Saiba Mais" classe="buttonSaibaMais" />
          </div>
          <div className="pessoas">
            <Image width="21vw" height="auto" src={img} />
          </div>
        </StyledContainer>
      )}
    </>
  );
};

export default Slogan;
