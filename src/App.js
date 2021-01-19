import "./App.css";
import Pages from "./Routes/routes";
import Header from "./Components/Organisms/Header/index";
import { useStyles, theme } from "./Theme";
import { useDispatch } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useEffect } from "react";

import { getAllUsersThunk } from "./Redux/modules/users/thunks";
import { addProjectsThunk } from "./Redux/modules/projects/thunk";

function App() {

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAllUsersThunk());
    dispatch(addProjectsThunk());
  }, [dispatch]);

  return (
      <ThemeProvider theme={theme}>
        <Paper className={classes.root} color="primary">
          <Header />
          <Pages />
        </Paper>
      </ThemeProvider>
  );
}

export default App;
