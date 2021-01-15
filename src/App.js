import "./App.css";
// import Pages from "./Pages/routes";
import Header from "./Components/Organisms/Header/index";

import { useStyles, theme } from "./Theme";

import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";


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
      </Paper>
    </ThemeProvider>
  );
}

export default App;
