import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
  },
  pageContent: {
    padding: theme.spacing(5),
    margin: theme.spacing(5),
    width: "80%",
  },
  typoText: {
    fontFamily: "Raleway",
    color: "#8083c9",
    fontWeight: "bold",
    fontSize: 40,
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: "#8083c9",
    color: "#ffffff",
  },
  idText: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: -26,
    marginBottom: 20,
    textDecoration: "underline",
  },
  divMain: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
  },
  //   radio: {
  //     marginLeft: 100,
  //   },
}));
