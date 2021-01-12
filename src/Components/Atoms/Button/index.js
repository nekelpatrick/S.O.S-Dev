import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./style.js";

export default function ContainedButtons({ text }) {
  const classes = useStyles();

  return (
    <Button className={classes.root} variant="contained" color="primary">
      {text}
    </Button>
  );
}
