import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./ReportScreenStyles";
import { AiOutlineArrowRight } from "react-icons/ai";

const ReportScreen = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.pageContent}>
      <Typography className={classes.headerText}>
        Edit Your Reports here:
      </Typography>
      <AiOutlineArrowRight />
      <Link to="/courseDescription1" className={classes.linkText}>
        Course Description
      </Link>
      <br />
      <AiOutlineArrowRight />

      <Link to="/openingReport" className={classes.linkText}>
        Opening Report
      </Link>
      <br />
      <AiOutlineArrowRight />
      <Link to="/attainmentReport" className={classes.linkText}>
        Attainment Report
      </Link>
      <br />
    </Paper>
  );
};

export default ReportScreen;
