import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./style.js";

export default function ContainedButtons({ text, classe, onClick, type, size }) {
  const classes = useStyles();

  return (
    <Button
      className={classes[classe]}
      onClick={onClick}
      variant="contained"
      color="secondary"
      type={type}
      size={size}
      onClick={onClick}
      variant="contained"
      color="secondary"
    >
      {text}
    </Button>
  );
}
