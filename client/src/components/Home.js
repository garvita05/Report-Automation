import React, { useState } from "react";
import CourseDescription from "./Reports/CourseDescription";
import { Button, Typography, Container, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./homeStyles";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic6 from '../images/pic6.jpg';

const Home = () => {
  const classes = useStyles();
  const [course, setCourse] = useState(false);
  return (
    <Container className={classes.headContainer}>
      <div className={classes.leftContainer}>
        <Typography className={classes.leftText}>Boost productivity</Typography>

        <Typography className={classes.leftText} >
          with Jaypee 
        </Typography>
        <Typography className={classes.leftText} >
        Automator
        </Typography>
        <div className={classes.registerLinkBox}>

        <Link to='auth/' className={classes.registerLink}>
          Register
        </Link>
        </div>


      </div>
      <div className={classes.rightContainer}>
      <AliceCarousel autoPlay autoPlayInterval='2000' className={classes.slider}>
        <img src={pic1}/>
        <img src={pic2}/>
        
       

      </AliceCarousel>

      </div>

      
      {/* <h4>Reports you can edit:</h4>
        <ol>
          <li>
          <div style={{ flexDirection: "row" }}>
            <Button className={classes.reportButton
            } component={Link} to="/CourseDescription" color="#3b5998">
              Course Description
            </Button>
          </div>
          </li> */}

      {/* <div style={{ flexDirection: "row" }}>
        <Button component={Link} to="/CourseDescription">
          {">>"} Closing Report
        </Button>
      </div>
      <div style={{ flexDirection: "row" }}>
        <Button component={Link} to="/CourseDescription">
          {">>"} CO-PO-PSO attainment Report
        </Button>
      </div>
      <div style={{ flexDirection: "row" }}>
        <Button component={Link} to="/CourseDescription">
          {">>"} OBE document verification
        </Button>
      </div>
      <div style={{ flexDirection: "row" }}>
        <Button component={Link} to="/CourseDescription">
          {">>"} Opening Report
        </Button>
      </div> */}
      {/* <li>
      <div className={classes.listContainer}>
        <Button className={classes.reportButton
        } component={Link} to="/CourseDescription" color="#3b5998">
           Opening Report
        </Button>
      </div>
      </li>
      <li>
      <div className={classes.listContainer}>
        <Button className={classes.reportButton
        } component={Link} to="/CourseDescription" color="#3b5998">
           Closing Report
        </Button>
      </div>
      </li>
      <li>
      <div className={classes.listContainer}>
        <Button className={classes.reportButton
        } component={Link} to="/CourseDescription" color="#3b5998">
           Attainment Report
        </Button>
      </div>
      </li>
      <li>

      <div className={classes.listContainer}>
        <Button className={classes.reportButton
        } component={Link} to="/CourseDescription" color="#3b5998">
           OBE DOC Verification 
        </Button>
      </div>
      </li>
     
        </ol> */}

      
    </Container>

  );
};
export default Home;
