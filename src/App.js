import "./App.css";
import Pages from "./Pages/routes";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { Paper, makeStyles } from "@material-ui/core";

import Header from "./Components/Organisms/Header/index";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#090C17",
  },
}));

function App() {
  const classes = useStyles();
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

  //por hora o tema ficará aqui, logo pretendo reorganizar.

  console.log(theme.palette);
  return (
    <ThemeProvider theme={theme}>
      <Paper
        className={classes.root}
        color="primary"
        style={{ height: "100vh" }}
      >
        <Header />
        <Pages />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
