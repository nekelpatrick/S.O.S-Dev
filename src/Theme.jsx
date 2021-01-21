import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#090C17",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "white",
        },
      },
    },
    root: {
      MuiInputLabel: {
        "&$focused": {
          color: "white",
        },
      },
    },
  },
  palette: {
    divider: "#870A39",

    type: "dark",

    contrastText: "#9C9CAC",
    primary: {
      main: "#17223A",
    },
    secondary: {
      main: "#E63462",
    },
    background: {
      paper: "#0C101D",
    },
  },
});

export { theme, useStyles };
