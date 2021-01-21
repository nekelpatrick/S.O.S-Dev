import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "55vw",
    margin: theme.spacing(2),
    flexGrow: 1,

    maxHeight: "85vh",
    width: "85vw",
  },

  content: {
    margin: theme.spacing(1),

    display: "flex",
    textAlign: "center",
    alignItems: "center",
    height: "30%",
  },

  contentItem: { height: "20vh", padding: "15px", backgroundColor: "#17223a" },

  contentItemComments: {
    height: "30vh",
    padding: "15px",
    backgroundColor: "#17223a",
    display: "flex",
    flexDirection: "column",
  },
  comments: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "20vh",
  },
  statsItem: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
}));

export default useStyles;
