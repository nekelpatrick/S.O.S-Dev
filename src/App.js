import "./App.css";
import Pages from "./Routes/routes";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { Paper } from "@material-ui/core";

import Header from "./Components/Organisms/Header/index";

import Techs from "./Components/Molecules/Techs";


function App() {
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
        paper: "#0C101D",
      },
    },
  });

  //por hora o tema ficará aqui, logo pretendo reorganizar.

  console.log(theme.palette);
  return (
    <ThemeProvider theme={theme}>
      <Paper color="primary" >
        <Header />
          <Pages />
        <Techs />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
