import { Typography, Paper, Container } from "@material-ui/core";
import React from "react";
import useStyles from "../Reports/successScreenStyles";
import { makeStyles } from "@material-ui/core/styles";

const SuccessScreen = () => {
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      <Paper className={classes.pageContent}>
        <Typography className={classes.typoText}>SUCCESS</Typography>
      </Paper>
    </Container>
  );
};

export default SuccessScreen;
