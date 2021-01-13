import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./style.js";

<<<<<<< HEAD
export default function ContainedButtons({ text, classe, cor }) {
=======
export default function ContainedButtons({ text, classe, onClick }) {
>>>>>>> fee7ffda446f82ba3c4d7f7663c96da65f635ff2
  const classes = useStyles();

  return (
    <Button className={classes[classe]} onClick = { onClick } variant="contained" color="secondary">
      {text}
    </Button>
  );
}
