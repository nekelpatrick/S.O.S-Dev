import { makeStyles } from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({
  container: {
    height: "50vh",
    marginBottom: '6vh',
  },

  grid: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    height: "20vh",
    width: '20vw',
    border: "1px solid #EFDCBD"
  },

  cardContent: {
    padding: '2vh 2vh 1vh 2vh',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "Center",
  },
  comments: {
    paddingTop: '0px',
    display: "flex",
    alignItems: "Center",
  },
}));

export default Styles;
