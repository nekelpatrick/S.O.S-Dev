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

import { useSelector } from "react-redux";

const ProjectCard = ({ titulo, tipo, descricao, stack, userId }) => {
  const classes = useStyles();
  const { users } = useSelector((state) => state);

  const findUser = users.find((e) => e.id === parseInt(userId));

  return (
    <Card elevation={12} align="center" className={classes.root}>
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
                {stack.map((e) => (
                  <>
                    <Typography
                      color="textSecondary"
                      display="inline"
                      variant="body2"
                      text={e.linguagem}
                    />
                    <Typography
                      color="textSecondary"
                      display="inline"
                      variant="body2"
                      text={e.nivel}
                    />
                  </>
                ))}
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
              text={findUser.user}
            />
            <Avatar className={classes.statsIcon} src={findUser.src} />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default ProjectCard;
