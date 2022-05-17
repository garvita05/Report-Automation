import React from "react";
import automation from "../../images/automation.jpeg";
import useStyles from "./customNavStyles";
import {
  Container,
  Typography,
  Button,
  text,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import IconButton from '@material-ui/core/IconButton';
// import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Auth from "../Auth/Auth";
import Home from "../Home";
import Controls from "../controls/Controls";
import { useForm } from "../Reports/useForm";

const CustomNavbar = () => {
  const classes = useStyles();
  const intialFValues = {
    report: "",
  };
  const reportItems = [
    { id: "Course Description", title: "Course Description" },
    { id: "Opening Report", title: "Opening Report" },
    {
      id: "Attainment and Closing Report",
      title: "Attainment and ClosingReport",
    },
  ];

  const { values, setValues, handleInputChange } = useForm(intialFValues);

  //const reports={['Course Description','Opening report','Closing And Attainment Report']}

  return (
    <Container className={classes.navbarContainer}>
      <div className={classes.topContainer}>
        <img src={automation} className={classes.jiitlogo} />
        <div className={classes.topSubContainer}>
          <Link to="/auth" className={classes.signinLink}>
            Sign in
          </Link>
          {/* <Link to='/auth'> */}
          {/* Sing in */}
          {/* <text className={classes.topSubContainer}>Sign in</text> */}
          {/* </Link> */}

          {/* <MdOutlineKeyboardArrowDown className={classes.arrowLogo} /> */}
        </div>
      </div>
      <div className={classes.navbarsecond}>
        <Link to="/" className={classes.automationLink}>
          AUTOMATION
        </Link>
        {/* <Controls.Select
          name="reports"
          label="Reports"
          value={values.courseCode}
          onChange={handleInputChange}
          options={dropdownService.courseCodeItems()}
          // error={errors.creditsLecture}
        /> */}

        <Link to="/reportScreen" className={classes.automationLink}>
          Reports
        </Link>

        {/* <Link to="/courseDescription1" className={classes.automationLink}>
          Reports
        </Link> */}
        {/* <Link to="/openingReport" className={classes.automationLink}>
          Reports
        </Link> */}
        {/* <Link to="/attainmentReport" className={classes.automationLink}>
          Reports
        </Link> */}

        {/* <text className={classes.navbarText}>
                    Reports
                </text> */}
        <text className={classes.navbarText}>My Reports</text>
        <text className={classes.navbarText}>My Profile</text>

        <text className={classes.navbarText}>About Us</text>
      </div>
    </Container>
  );
};

export default CustomNavbar;
