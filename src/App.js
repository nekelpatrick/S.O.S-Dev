import "./App.css";
import Pages from "./Routes/routes";
import { useStyles, theme } from "./Theme";
import { useDispatch } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useEffect } from "react";

import { getAllUsersThunk } from "./Redux/modules/users/thunks";

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <Paper className={classes.root} color="primary">
=======
      <Paper className={classes.root}>
        <Header />
>>>>>>> 1c43180498810a0f8cbe5c7acfe3df760e93cd8c
        <Pages />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
