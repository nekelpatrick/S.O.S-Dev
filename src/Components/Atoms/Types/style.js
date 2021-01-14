import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },

  textCard: {
    width: "90%",
  },

  commentTitle: {
    fontSize: '15px',
    marginRight: '1vw'
  },

  commentContent: {
    fontSize: '12px',
  }
}));

export default Style;
