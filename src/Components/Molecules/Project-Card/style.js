import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "50vw",
    margin: '2vh auto',
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
    height: "30vh",
  },

  contentItem: {
    height: "30vh",
    maxHeight: "24vh",
    backgroundColor: "#17223a",
    padding: "10px",
  },
  contentItemStacksTech: {
    height: "30vh",
    maxHeight: "24vh",
    backgroundColor: "#17223a",
    display: "flex",
    flexDirection: "column",
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
