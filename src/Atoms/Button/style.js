import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
    backgroundColor: "black",
  },

  buttonSaibaMais: {},
}));

export default Style;
