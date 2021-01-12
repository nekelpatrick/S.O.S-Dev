import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default Style;
