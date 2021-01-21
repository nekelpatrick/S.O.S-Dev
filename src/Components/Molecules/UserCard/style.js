import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 30,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 30,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#C4C4C4",
    width: 100,
    height: 100,
    [theme.breakpoints.down("xs")]: {
      width: 70,
      height: 70,
    },
  },
  username: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
  text: {
    textAlign: "left",
  },
  skillContainer: {
    display: "flex",
  },
  skillTitle: {
    flex: "0 0 18%",
  },
  skillContent: {
    flex: "1 0 80%",
  },
}));

export default useStyles;
