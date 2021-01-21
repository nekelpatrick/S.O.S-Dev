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
    "&:hover": {
      backgroundColor: "#ffffff05",
    },
  },

  profileFavorites: {
    fontSize: "1vw",
    color: '#EFDCBD',

    borderRadius: "12px",
    marginBottom: '1vh',
    "@media(max-width: 280px)": {
      width: '30vw !important',
      fontSize: "3.5vw !important"
    },
    "@media(max-width: 320px)": {
      width: '30vw !important',
      fontSize: "3vw !important"
    },
    "@media(max-width: 540px)": {
      width: '30vw !important',
      fontSize: "2vw !important"
    },
    '@media(min-width: 768px)': {
      width: '9vw',
    },
    '@media(min-width: 1440px)': {
      fontSize: "0.8vw",
    },
  },

  buttonLogin: {},
  buttonRegister: {},

  saveButton: {
    width: "20px",
  },
}));

export default Style;
