import "./App.css";
import Pages from "./Routes/routes";
import { useStyles, theme } from "./Theme";
import { useDispatch } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useEffect } from "react";

import { getAllUsersThunk } from "./Redux/modules/users/thunks";
import { addProjectsThunk } from "./Redux/modules/projects/thunk";

import { useSelector } from "react-redux";

import Favorites from "./Components/Organisms/Favorites";

function App() {

  const dispatch = useDispatch();
  const classes = useStyles();
  const projects = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getAllUsersThunk());
    dispatch(addProjectsThunk());
  }, [dispatch]);

  console.log(projects)

  return (
      <ThemeProvider theme={theme}>
        <Paper className={classes.root} color="primary">
          {/* <Pages /> */}
          <Favorites />
        </Paper>
      </ThemeProvider>
  );
}

export default App; 
