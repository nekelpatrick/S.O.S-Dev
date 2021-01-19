import React from "react";

import Card from "../../Components/Molecules/Project-Card-Add-New";
import Card2 from "../../Components/Molecules/Project-Card";
import EditUser from "../../Components/Organisms/ProfileForm";

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
      <EditUser />
    </div>
  );
};

export default PerfilRenderBox;
