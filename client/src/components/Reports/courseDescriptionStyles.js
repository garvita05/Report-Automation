import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
  arrow: {
    color: "#8083c9",
  },
  pageContent: {
    padding: theme.spacing(5),
    margin: theme.spacing(5),
  },
  coordinatorContainer: {
    width: "3%",
  },
  addButton: {
    marginTop: 10,
  },
  linkText: {
    fontFamily: "Raleway",
    color: "#8083c9",
  },
  minusButton: {
    marginTop: 10,
  },
  captionsText: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: "#8083c9",
    fontStyle: "italic",
    marginLeft: 10,
  },
  insideDiv: {
    marginTop: 5,
    marginBottom: 20,
  },
  div1: {
    flexDirection: "column",
  },
  headerText: {
    fontFamily: "Raleway",
    color: "#8083c9",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 12,
  },
  normalText: {
    marginLeft: 10,
    color: "#8083c9",
  },
  submitButton: {
    backgroundColor: "#8083c9",
    color: "#ffffff",
  },
}));
