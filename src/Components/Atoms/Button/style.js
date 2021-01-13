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
  buttonSaibaMais: {},

  buttonArrow: {
    "& > *": {
      margin: theme.spacing(1),
    },
    borderRadius: "100%",
    border: "5px solid #fff"
  }
}));

export default Style;
