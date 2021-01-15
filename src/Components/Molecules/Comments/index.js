import Types from "../../Atoms/Types";
import Image from "../../Atoms/Image";
import useStyles from "./style.js";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Comments = () => {
  const classes = useStyles();

  const name = "NOME DO USUARIO";
  const text = "Somos um espaço focado nos iniciantes da comunidade de programadores. O nosso espaço proporciona expriência em trabalho em grupo para iniciantes e também complemento para um currículo melhor estruturado!";

  return (
    <>
      <Container className={classes.container} maxWidth="md">
        <Grid container className={classes.grid}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Image
                src=""
                alt="name"
                width="45px"
                height="45px"
                borderRadius="50%"
              />
              <Types variant="h6" component = 'h3' text={name} classe = {"commentTitle"}/>
            </CardContent>
            <CardContent className={classes.comments}>
              <Types variant="body1" component = 'p' text={text} classe = {"commentContent"}/>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
};

export default Comments;
