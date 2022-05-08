import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  automationLink: {
    textDecoration: "none",
    fontFamily: "Raleway",
    color: "#191919",
    fontSize: 15,
    padding: 5,
    marginLeft: 20,
  },
  signinLink: {
    textDecoration: "none",
    fontFamily: "Raleway",
    color: "#191919",
    fontSize: 15,
    padding: 5,
    marginLeft: 20,
    borderStyle: "solid",
    borderLeftWidth: 0.25,
    borderRightWidth: 0.25,
    borderTopWidth: 0.25,
    borderBottomWidth: 0.25,
  },
  arrowLogo: {
    paddingLeft: 7,
  },
  buttonLogo: {
    height: 20,
    width: 1,
    marginLeft: -20,
  },
  jiitlogo: {
    flex: "row",
    height: 80,
    width: 70,
    marginLeft: -100,
  },
  //   mainCustomNavbar: {
  //     widht: "100%",
  //   },

  //   mainDiv: {
  //     backgroundColor: "#8083c9",
  //   },
  navbarButtons: {
    padding: 0,
  },
  navbarContainer: {
    flexDirection: "column",
  },
  navbarsecond: {
    flexDirection: "row",
    marginLeft: -135,
    marginTop: -20,
    marginLeft: -130,
    // backgroundColor: "#8083c9",
  },
  navbarText: {
    color: "#191919",
    fontSize: 15,
    fontFamily: "Raleway",
    padding: 30,
  },
  topContainer: {
    flexDirection: "row",
    // backgroundColor: "#8083c9",
  },
  topSubContainer: {
    display: "flex",
    justifyContent: "flex-end",
    fontSize: 15,
    fontFamily: "Raleway",
  },
}));
