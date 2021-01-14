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
  const text = "USAR COMENTARIO DPS";

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
              <Types variant="h6" text={name} />
            </CardContent>
            <CardContent className={classes.comments}>
              <Types variant="body1" text={text} />
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
};

export default Comments;
