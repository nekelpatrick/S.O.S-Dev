import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style.js";

const Types = ({ variant, component, classe, text, align, color }) => {
  const classes = useStyles();
  return (
    <div className={classes[classe]}>
      <Typography
        variant={variant}
        component={component}
        gutterBottom
        align={align}
        color={color}
      >
        {text}
      </Typography>
    </div>
  );
};

export default Types;
