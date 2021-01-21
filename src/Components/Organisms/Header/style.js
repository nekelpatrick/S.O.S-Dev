import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: "solid 1px #870A39",
    marginBottom: theme.spacing(1.3),
    position: "sticky",
    top: 0,
    bottom: 20,
    zIndex: 5,
  },
  menuButton: {
    '@media(min-width: 768px)': {
      display: 'none',
    }
  }
}));

export default Style;
