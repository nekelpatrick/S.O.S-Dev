import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#090C17",
  },
}));

const theme = createMuiTheme({
  palette: {
    divider: "#870A39",
    type: "dark",
    primary: {
      main: "#17223A",
    },
    secondary: {
      main: "#E63462",
    },
    background: {
      paper: "#121a2b",
    },
  },
});

export { theme, useStyles };
