import "./App.css";
<<<<<<< HEAD
=======
import Pages from "./Routes/routes";
>>>>>>> a5962e088de98860276275de7aebe26944b3e42e
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
      >
        <Header />
          <Pages />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
