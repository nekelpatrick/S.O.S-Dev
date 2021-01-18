import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "55vw",
    margin: theme.spacing(1),
    flexGrow: 1,
  },

  content: {
    margin: theme.spacing(1),

    display: "flex",
    textAlign: "center",
    alignItems: "center",
    height: "30vh",
  },

  contentItem: { height: "30vh", padding: "10px", backgroundColor: "#17223a" },

  statsItem: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
}));

export default useStyles;
