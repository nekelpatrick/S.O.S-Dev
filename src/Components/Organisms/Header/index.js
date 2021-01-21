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
import { useContext } from "react";

import { MobileStateContext } from '../../../Routes/mobileStateContext'

export default function ButtonAppBar({ auth, setAuth }) {
  const {display, setDisplay} = useContext(MobileStateContext)

  const useStyles = Style;
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    window.localStorage.clear();
    setAuth(1);
    history.push("/");
    window.location.reload();
  };

  console.log(window.innerWidth)

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick = {() => setDisplay(display ? false : true)}
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
