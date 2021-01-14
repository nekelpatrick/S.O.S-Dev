import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  CardActions,
  Paper,
} from "@material-ui/core";

import Button from "../../Atoms/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "50vw",
    margin: theme.spacing(1),
    flexGrow: 1,
  },

  cardHeader: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    margin: theme.spacing(1),

    display: "flex",
    textAlign: "center",
    alignItems: "center",
    height: "18vh",
  },

  contentItem: { height: "18vh", backgroundColor: "#17223a" },

  statsItem: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  statsIcon: {
    margin: theme.spacing(1),
  },
}));

const ProductCard = () => {
  const classes = useStyles();

  return (
    <Card elevation={8} className={classes.root}>
      <CardContent>
        <Grid className={classes.cardHeader} container spacing={2}>
          <Grid item xs={2}>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h4"
            >
              Título
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Tech
            </Typography>
          </Grid>
        </Grid>

        <div className={classes.content}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Paper elevation={6} className={classes.contentItem}>
                <Typography
                  color="textSecondary"
                  display="inline"
                  variant="body2"
                >
                  DESCRIÇAO
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper elevation={6} className={classes.contentItem}>
                STACKS
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
            <Typography color="textPrimary" display="inline" variant="h8">
              Nome
            </Typography>
            <Avatar className={classes.statsIcon} />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default ProductCard;
