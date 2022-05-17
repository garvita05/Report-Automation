import React from "react";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

const ReportScreen = () => {
  return (
    <Paper>
      <Link to="/courseDescription1">Course Description</Link>
      <br />

      <Link to="/openingReport">Opening Report</Link>
      <br />
      <Link to="/attainmentReport">Attainment Report</Link>
      <br />
    </Paper>
  );
};

export default ReportScreen;
