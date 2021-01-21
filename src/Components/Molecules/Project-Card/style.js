import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "50vw",
    margin: theme.spacing(3),
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
    height: "26vh",
  },

  contentItem: {
    height: "25vh",
    maxHeight: "24vh",
    backgroundColor: "#17223a",
    justifyContent: "center",
    textAlign: "center",
    padding: "10px",
  },

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

export default useStyles;
