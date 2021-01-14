import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Style from "./style";

import Typography from "../../Atoms/Types/";
import Popup from "../../Organisms/Pop-up";

export default function ButtonAppBar() {
  const useStyles = Style;
  const classes = useStyles();

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
          <Popup />
        </Toolbar>
      </AppBar>
    </div>
  );
}
