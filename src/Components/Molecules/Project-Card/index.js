import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  CardActions,
  Paper,
} from "@material-ui/core";

import Button from "../../Atoms/Button";
import Typography from "../../Atoms/Types";
import useStyles from "./style";

const ProjectCard = ({ titulo, tipo, descricao, stack, user }) => {
  const classes = useStyles();

  return (
    <Card elevation={12} className={classes.root}>
      <CardContent>
        <Grid className={classes.cardHeader} container spacing={2}>
          <Grid item xs={2}>
            <Typography
              align="center"
              color="textSecondary"
              gutterBottom
              variant="h4"
              text={titulo}
            />
          </Grid>

          <Grid item xs={1}>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h6"
              text={tipo}
            />
          </Grid>
        </Grid>

        <div className={classes.content}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Paper elevation={7} className={classes.contentItem}>
                <Typography
                  color="textSecondary"
                  display="inline"
                  variant="body2"
                  text={descricao}
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper elevation={7} className={classes.contentItem}>
                <Typography
                  color="textSecondary"
                  display="inline"
                  variant="body2"
                  text={stack}
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </CardContent>

      <Divider />

      <Box p={1.2}>
        <Grid container justify="space-between" spacing={1}>
          <Grid className={classes.statsItem} item>
            <CardActions>
              <Button
                className={classes.statsIcon}
                text="abrir projeto"
              ></Button>
            </CardActions>
          </Grid>

          <Grid className={classes.statsItem} item>
            <Typography
              color="textPrimary"
              display="inline"
              variant="h6"
              text={user}
            />
            <Avatar className={classes.statsIcon} />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default ProjectCard;
