import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  bodyContainer: {
    width: "100%",
    maxWidth: "100%",
    padding: "0",
    margin: "0",
    top: "0",
    display: "block",
    boxSizing: "border-box",
  },
  headerBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "left",
    background: "rgba(0, 0, 0, 0.5) none",
    padding: "20px",
    width: "100%",
    position: "fixed",
  
  },
  heading: {
    color: "#FFFFFF",
    fontSize: "29px",
    width: "100%",
  },
  text: {
    color: "#FFFFFF",
    fontSize: "16px",
    width: "100%",
  },
  contentWrap: {

    padding: "140px 25px 0px",
    "@media (max-width: 480px)": {
      paddingTop: "180px",
    },
  },
}));
