import { makeStyles } from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({
  container: {
    "& > *": {
      margin: theme.spacing(1),
    },
    height: "20vh",
  },

  grid: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    height: "100%",
  },

  cardContent: {
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "Center",
  },
  comments: {
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "Center",
  },
}));

export default Styles;
