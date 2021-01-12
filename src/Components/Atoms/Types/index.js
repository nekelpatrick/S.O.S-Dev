import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style.js";

const Types = ({ variant, component, classe, text }) => {
  const classes = useStyles();
  return (
    <div className={classes[classe]}>
      <Typography variant={variant} component={component} gutterBottom>
        {text}
      </Typography>
    </div>
  );
};

export default Types;
