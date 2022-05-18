import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
  },
  pageContent: {
    padding: theme.spacing(5),
    margin: theme.spacing(5),
    width: "85%",
  },
  headerText: {
    fontFamily: "Raleway",
    fontSize: 50,
    color: "#8083c9",
  },
  linkText: {
    fontSize: 30,
    color: "#000000",
    fontFamily: "Raleway",
  },
  typoText: {
    fontFamily: "Raleway",
    color: "#8083c9",
    fontWeight: "bold",
    marginLeft: 10,
  },
  //   radio: {
  //     marginLeft: 100,
  //   },
}));
