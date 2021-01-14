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

  buttonLogin: {},
  buttonRegister: {},
}));

export default Style;
