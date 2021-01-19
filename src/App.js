import "./App.css";
import Pages from "./Routes/routes";
import Header from "./Components/Organisms/Header/index";
import { useStyles, theme } from "./Theme";

import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Filters from "./Components/Molecules/Filters";

function App() {
  const classes = useStyles();

  console.log(theme.palette);
  return (
      <ThemeProvider theme={theme}>
        <Paper className={classes.root} color="primary">
          <Header />
          <Filters />
          <Pages />
        </Paper>
      </ThemeProvider>
  );
}

export default App;
