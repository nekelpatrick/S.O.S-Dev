import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./style.js";

export default function ContainedButtons({
  text,
  classe,
  onClick,
  type,
  size,
}) {
  const classes = useStyles();

  return (
    <Button
      className={classes[classe]}
      onClick={onClick}
      variant="contained"
      color="secondary"
      type={type}
<<<<<<< HEAD
      size={size}
=======
      onClick={onClick}
      variant="contained"
      color="secondary"
>>>>>>> bb719e9213606837a1a6f6b6490d572accaccc44
    >
      {text}
    </Button>
  );
}
