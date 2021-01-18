import React from "react";

import Card from "../Components/Molecules/Project-Card-Add-New";
import Card2 from "../Components/Molecules/Project-Card";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  RenderBox: {
    width: "100%",
    height: "95%",
  },
}));
const PerfilRenderBox = () => {
  const classes = useStyles();

  return (
    <div className={classes.RenderBox}>
      <Card2></Card2>
      <Card2></Card2>
    </div>
  );
};

export default PerfilRenderBox;
