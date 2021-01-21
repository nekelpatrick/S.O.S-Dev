import React from "react";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Style from "./style";

import Typography from "../../Atoms/Types/";
import Popup from "../../Organisms/Pop-up";
import Button from "../../Atoms/Button";

export default function ButtonAppBar({ auth, setAuth }) {
  const useStyles = Style;
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    setAuth(1);
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            classe="title"
            text="S.O.S Space Open Source"
          ></Typography>
          {auth ? <Button onClick={logout} text="Sair" /> : <Popup />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
