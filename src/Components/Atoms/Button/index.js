import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./style.js";

export default function ContainedButtons({ text, classe, onClick, size }) {
  const classes = useStyles();

  return (
    <Button
      className={classes[classe]}
      size={size}
      onClick={onClick}
      variant="contained"
      color="secondary"
    >
      {text}
    </Button>
  );
}
