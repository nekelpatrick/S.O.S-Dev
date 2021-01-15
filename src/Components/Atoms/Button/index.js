import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./style.js";

<<<<<<< HEAD
export default function ContainedButtons({
  text,
  classe,
  onClick,
  type,
  size,
}) {
=======
export default function ContainedButtons({ text, classe, onClick, type, size }) {
>>>>>>> a5962e088de98860276275de7aebe26944b3e42e
  const classes = useStyles();

  return (
    <Button
      className={classes[classe]}
      onClick={onClick}
      variant="contained"
      color="secondary"
      type={type}
      size={size}
    >
      {text}
    </Button>
  );
}
