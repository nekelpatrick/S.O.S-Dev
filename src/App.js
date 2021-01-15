import "./App.css";
import Header from "./Components/Organisms/Header/index";

import { useStyles, theme } from "./Theme";

import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Techs from "./Components/Molecules/Techs";

function App() {
  const classes = useStyles();

  console.log(theme.palette);
  return (
    <ThemeProvider theme={theme}>
      <Paper
        className={classes.root}
        color="primary"
        style={{ height: "100vh" }}
      >
        <Header />
        {/* <Pages /> */}
        <Techs />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
