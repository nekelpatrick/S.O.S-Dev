import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginBottom: "0px",
  },

  textCard: {
    width: "90%",
  },

  commentTitle: {
    fontSize: "15px",
    marginRight: "1vw",
  },

  commentContent: {
    fontSize: "12px",
  },

  fontStyleProfile: {
    color: "#EFDCBD",
    fontSize: '1.7vw',
    "@media(min-width: 1440px)": {
      fontSize: '1vw',
    },
  },

  profileContacts: {
    color: "#EFDCBD",
  },

  fontStyleProfileName: {
    color: "#EFDCBD",
    fontSize: '2.5vw',
    "@media(min-width: 1440px)": {
      fontSize: '1.8vw',
    },
    "@media(min-width: 2560px)": {
      fontSize: '1.5vw',
    }
  },
}));

export default Style;
