import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  headerButton: {
    marginRight: theme.spacing(2),
  },
  buttonSaibaMais: {
    width: "200px",
  },

  buttonArrow: {
    "& > *": {
      margin: theme.spacing(1),
    },
    borderRadius: "100%",
    border: "5px solid #fff",
  },

  buttonTechs: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: "45%",
    height: "16%",
    borderRadius: "9px",
    margin: "0 auto",

  },
  buttonPupUpAddTechs: {
    fontFamily: "fontawesome",
    fontSize: "1rem",
    color: "#E63462",

    padding: "0%",
    width: "60px",
    backgroundColor: "#ffffff00",
    borderRadius: "12px",
    '&:hover': {
      backgroundColor: "#ffffff05"
    }
  },

  profileFavorites: {
    fontSize: "1rem",
    color: '#EFDCBD',

    borderRadius: "12px",
    marginBottom: '1vh',
  },

  buttonLogin: {},
  buttonRegister: {},
}));

export default Style;
