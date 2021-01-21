import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./style.js";

export default function ContainedButtons({
  text,
  classe,
  onClick,
  type,
  size,
  variant,
}) {
  const classes = useStyles();

  return (
    <Button
      className={classes[classe]}
      onClick={onClick}
      variant={variant ? variant : "contained"}
      color="secondary"
      type={type}
      size={size}
    >
      {text}
    </Button>
  );
}
