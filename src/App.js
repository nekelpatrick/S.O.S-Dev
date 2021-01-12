import "./App.css";
import Pages from "./Pages/routes";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { Paper } from "@material-ui/core";

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#17223A",
      },
      secondary: {
        main: "#E63462",
      },
      background: {
        paper: "#17223A",
      },
    },
  });

  //por hora o tema ficará aqui, logo pretendo reorganizar.

  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Paper color="primary" style={{ height: "100vh" }}>
        <Pages />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
