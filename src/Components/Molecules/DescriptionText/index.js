import Section2Content from "./style";

import Types from "../../Atoms/Types";
import Image from "../../Atoms/Image";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10%",
    marginBottom: "10%",
  },
  mobileTitle: {},
  mobileDesc: {
    padding: "0 2vw 0 2vw",
  },
}));

const DescriptionText = ({ image }) => {
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width:600px)");

  const cardTitle = "Por que usar o S.O.S?";
  const text =
    "Somos um espaço focado nos iniciantes da comunidade de programadores. O nosso espaço proporciona expriência em trabalho em grupo para iniciantes e também complemento para um currículo melhor estruturado!";

  return (
    <>
      {isMobile ? (
        <Container className={classes.root}>
          <Typography
            className={classes.mobileTitle}
            align="center"
            variant="h5"
            style={{ marginBottom: "2vw" }}
          >
            Por que usar o S.O.S Dev?
          </Typography>

          <Typography
            className={classes.mobileDesc}
            variant="body1"
            align="center"
          >
            {text}
          </Typography>
        </Container>
      ) : (
        <Section2Content>
          <div className="second-image-content">
            <Image src={image} height="auto" width="21vw" />
          </div>
          <div className="description-text-content">
            <Types variant="h5" component="h2" text={cardTitle} />
            <div className="description">
              <Types vari ant="body1" component="p" text={text} />
            </div>
          </div>
        </Section2Content>
      )}
    </>
  );
};

export default DescriptionText;
