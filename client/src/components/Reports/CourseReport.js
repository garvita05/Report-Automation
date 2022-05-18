import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Paper, Table } from "@material-ui/core";

import useStyles from "./courseDescriptionStyles";
import { useForm, Form } from "./useForm";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Container,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import Controls from "../controls/Controls";
import * as dropdownService from "../../services/dropdownData";
import { AiOutlineArrowRight } from "react-icons/ai";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const CourseReport = () => {
  let navigate = useNavigate();

  function handleSubmit() {
    console.log("clicked");
    let bucket = ["123456", "123457", "123458"];
    var obj = {
      course_code: bucket[values.courseCode],
      course_name: values.courseName,
      course_credits:
        values.creditsLab + values.creditsLecture + values.creditsTutorial,
      contact_hours: values.contactHours,
      Branch: values.branch,
      semester: values.semester,
      Module_table: inputFeilds,
      course_outcome: courseOutcome,
      faculty_table: faculty,
      text_Book_table: books,
    };
    console.log(obj);
    axios
      .post("http://localhost:5000/api/enterCourseDescription/", obj)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("successScreen");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // const handleInputCode = () => {

  //     values.

  // }

  const classes = useStyles();
  const intialFValues = {
    courseName: "",
    courseCode: "",
    semester: "",
    branch: "",
    dateFrom: new Date(),
    dateTo: new Date(),
    creditsLecture: "",
    creditsTutorial: "",
    creditsLab: "",
    contactHours: "",

    teacherNames: [],
    modules: [],
    eval: "",
    books: [],
  };
  const [inputFeilds, setInputFeilds] = useState([
    {
      module_no: "",
      title: "",
      topic: "",
      no_of_lectures: "",
    },
  ]);
  const [coordinator, setCoordinator] = useState([
    {
      coordinatorName: "",
      coordinatorCode: "",
    },
  ]);
  const [ta, setTa] = useState([
    {
      Attendence: "",
      Assignments: "",
      Quiz: "",
      PBL: "",
      Tutorials: "",
    },
  ]);
  const [books, setBooks] = useState([
    {
      Name: "",
      Author: "",
    },
  ]);
  const handleChangeTa = (index4, event) => {
    const values = [...ta];
    values[index4][event.target.name] = event.target.value;
    setTa(values);
  };
  const handlePlusBooks = (index5, event) => {
    setBooks([
      ...books,
      {
        name: "",
        author: "",
      },
    ]);
  };
  const handleMinusBooks = (index5) => {
    const value = [...books];
    value.splice(index5, 1);
    setBooks(value);
  };
  const handleChangeBooks = (index5, event) => {
    const values = [...books];
    values[index5][event.target.name] = event.target.value;
    setBooks(values);
  };
  const handleMinusCoordinator = (index1) => {
    const value = [...coordinator];
    value.splice(index1, 1);
    setCoordinator(value);
  };
  const handleplusCoordinator = () => {
    setCoordinator([
      ...coordinator,
      {
        coordinatorName: "",
        coordinatorCode: "",
      },
    ]);
  };
  const handleChangeCoordinator = (index1, event) => {
    const values = [...coordinator];
    values[index1][event.target.name] = event.target.value;
    setCoordinator(values);
  };

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const [faculty, setFaculty] = useState([
    {
      faculty_name: "",
      faculty_id: "",
    },
  ]);
  const [courseOutcome, setCourseOutcome] = useState([
    {
      index: "",
      Description: "",
      cognitive_level: "",
    },
  ]);

  const handleplusCourseOutcome = (index3, event) => {
    setCourseOutcome([
      ...courseOutcome,
      {
        index: "",
        Description: "",
        cognitive_level: "",
      },
    ]);
  };
  const handleMinusCourseOutcome = (index3) => {
    const value = [...courseOutcome];
    value.splice(index3, 1);
    setCourseOutcome(value);
  };
  const handleChangeCourseOutcome = (index3, event) => {
    const values = [...courseOutcome];
    values[index3][event.target.name] = event.target.value;
    setCourseOutcome(values);
  };
  const handleChangeInput = (index, event) => {
    const values = [...inputFeilds];
    values[index][event.target.name] = event.target.value;
    setInputFeilds(values);
  };
  const handleChangeFaculty = (index2, event) => {
    const values = [...faculty];
    values[index2][event.target.name] = event.target.value;
    setFaculty(values);
  };
  const handleMinusFaculty = (index2) => {
    const value = [...faculty];
    value.splice(index2, 1);
    setFaculty(value);
  };
  const handleplusFaculty = () => {
    setFaculty([
      ...faculty,
      {
        faculty_name: "",
        faculty_id: "",
      },
    ]);
  };
  const handleplus = () => {
    setInputFeilds([
      ...inputFeilds,
      {
        module_no: "",
        title: "",
        topic: "",
      },
    ]);
  };
  const handleMinus = (index) => {
    const value = [...inputFeilds];
    value.splice(index, 1);
    setInputFeilds(value);
  };
  const { values, setValues, handleInputChange } = useForm(intialFValues);
  const semesterItems = [
    { id: "Odd", title: "Odd" },
    { id: "Even", title: "Even" },
  ];
  const branchItems = [
    { id: "Cse", title: "Cse" },
    { id: "Ece", title: "Ece" },
    { id: "Biotech", title: "Biotech" },
  ];

  const lectureCreditItems = [
    { id: 0, title: 0 },
    { id: 1, title: 1 },
    { id: 2, title: 2 },
    { id: 3, title: 3 },
    { id: 4, title: 4 },
    { id: 5, title: 5 },
    { id: 6, title: 6 },
    { id: 7, title: 7 },
    { id: 8, title: 8 },
    { id: 9, title: 9 },
  ];
  const { state } = useLocation();
  const { id } = state || {};
  const [loading, setloading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:5000/api/getCourseDescription/${id}`)
      .then((res) => {
        setData(res.data.message);
        console.log(data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   console.log(id);
  if (loading === true) {
    return <p>loading....</p>;
  }

  return (
    <Container className={classes.mainLayout}>
      <Paper className={classes.pageContent}>
        <Typography className={classes.headerText} align="center">
          Course Description Form
        </Typography>
        <Typography className={classes.normalText} align="left">
          Fill in the details carefully:
        </Typography>

        <Form>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Course Name"
                name="courseName"
                value={data?.course_ref?.course_name}
                onChange={handleInputChange}
                style={{ width: "35%" }}
              />

              <Controls.Select
                name="courseCode"
                label="Course Code"
                value={data?.course_ref?.course_code}
                onChange={handleInputChange}
                options={dropdownService.courseCodeItems()}
                // error={errors.creditsLecture}
              />
              {/* <Controls.Input
              name="courseName"
              label="Course Name"
              value={values.courseName}
              onChange={handleInputChange}
            /> */}
              {/* <Controls.Input
              name="courseCode"
              label="Course Code"
              value={values.courseCode}
              onChange={handleInputChange}
            /> */}
              <Controls.Select
                name="creditsLecture"
                label="Credits "
                value={data?.course_ref?.course_credits}
                onChange={handleInputChange}
                options={lectureCreditItems}

                // error={errors.creditsLecture}
              />
              {/* <Controls.Select
                name="creditsTutorial"
                label="Credits Tutorial"
                value={values.creditsTutorial}
                onChange={handleInputChange}
                options={lectureCreditItems}

                // error={errors.creditsLecture}
              />
              <Controls.Select
                name="creditsLab"
                label="Credits Lab"
                value={values.creditsLab}
                onChange={handleInputChange}
                options={lectureCreditItems}

                // error={errors.creditsLecture}
              /> */}
              {/* <Controls.Select
                name="contactHours"
                label="Contact Hours"
                value={values.contactHours}
                onChange={handleInputChange}
                options={lectureCreditItems}

                // error={errors.creditsLecture}
              /> */}
            </Grid>
            <Grid item xs={6}>
              <Controls.RadioGroup
                name="semester"
                label="Semester"
                value={data.semester}
                onChange={handleInputChange}
                items={semesterItems}
              />
              <Controls.RadioGroup
                name="branch"
                label="Branch"
                value={data?.course_ref?.Branch}
                onChange={handleInputChange}
                items={branchItems}
              />
              <Controls.DatePicker
                name="dateFrom"
                label="Date From"
                value={values.dateFrom}
                onChange={handleInputChange}
              />
              <Controls.DatePicker
                name="dateTo"
                label="Date To"
                value={values.dateTo}
                onChange={handleInputChange}
              />

              {/* <Controls.Input
              name="coordinatorName"
              label="Coordinator Name"
              value={values.coordinatorName}
              onChange={handleInputChange}
            />
            <Controls.Input
              name="coordinatorCode"
              label="Coordinator Code"
              value={values.courseName}
              onChange={handleInputChange}
            /> */}
            </Grid>
          </Grid>
          <hr></hr>
          <Grid container>
            <div className={classes.div1}>
              <div>
                <Typography className={classes.captionsText}>
                  Coordinator Details
                </Typography>
              </div>
              {coordinator.map((coordinator, index1) => (
                <div key={index1} className={classes.insideDiv}>
                  <TextField
                    variant="outlined"
                    label="Coordinator Name"
                    name="coordinatorName"
                    value={coordinator.coordinatorName}
                    onChange={(event) => handleChangeCoordinator(index1, event)}
                    style={{ width: "35%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Coordinator Code"
                    name="coordinatorCode"
                    value={coordinator.coordinatorCode}
                    onChange={(event) => handleChangeCoordinator(index1, event)}
                    style={{ width: "35%" }}
                  />
                  <IconButton
                    className={classes.addButton}
                    onClick={() => handleplusCoordinator()}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    className={classes.minusButton}
                    onClick={() => handleMinusCoordinator()}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>
              ))}
            </div>

            <div className={classes.div1}>
              <div>
                <Typography className={classes.captionsText}>
                  Faculty Details
                </Typography>
              </div>
              {faculty.map((faculty, index2) => (
                <div key={index2} className={classes.insideDiv}>
                  <TextField
                    variant="outlined"
                    label="Faculty Name"
                    name="faculty_name"
                    value={data?.course_ref?.faculty_name}
                    onChange={(event) => handleChangeFaculty(index2, event)}
                    style={{ width: "35%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Faculty Code"
                    name="faculty_id"
                    value={faculty.faculty_id}
                    onChange={(event) => handleChangeFaculty(index2, event)}
                    style={{ width: "35%" }}
                  />
                  <IconButton
                    className={classes.addButton}
                    onClick={() => handleplusFaculty()}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    className={classes.minusButton}
                    onClick={() => handleMinusFaculty()}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>
              ))}
            </div>

            <div className={classes.div1}>
              <div>
                <Typography className={classes.captionsText}>
                  Modules Details
                </Typography>
              </div>

              {inputFeilds.map((inputFeilds, index) => (
                <div key={index} className={classes.insideDiv}>
                  <TextField
                    variant="outlined"
                    label="Module Name"
                    name="module_no"
                    value={inputFeilds.module_no}
                    onChange={(event) => handleChangeInput(index, event)}
                    style={{ width: "25%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Topics "
                    name="title"
                    value={inputFeilds.title}
                    onChange={(event) => handleChangeInput(index, event)}
                    style={{ width: "20%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Lectures "
                    name="topic"
                    value={inputFeilds.topic}
                    onChange={(event) => handleChangeInput(index, event)}
                    style={{ width: "20%" }}
                  />
                  <IconButton
                    className={classes.addButton}
                    onClick={() => handleplus()}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    className={classes.minusButton}
                    onClick={() => handleMinus(index)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>
              ))}
            </div>

            <div className={classes.div1}>
              <div>
                <Typography className={classes.captionsText}>
                  Course Outcomes
                </Typography>
              </div>
              {courseOutcome.map((courseOutcome, index3) => (
                <div key={index3} className={classes.insideDiv}>
                  <TextField
                    variant="outlined"
                    label="No"
                    name="index"
                    value={courseOutcome.index}
                    onChange={(event) =>
                      handleChangeCourseOutcome(index3, event)
                    }
                    style={{ width: "10%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Course Outcome Description"
                    name="Description"
                    value={courseOutcome.Description}
                    onChange={(event) =>
                      handleChangeCourseOutcome(index3, event)
                    }
                    style={{ width: "35%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Course Outcome Level"
                    name="cognitive_level"
                    value={courseOutcome.cognitive_level}
                    onChange={(event) =>
                      handleChangeCourseOutcome(index3, event)
                    }
                    style={{ width: "35%" }}
                  />
                  <IconButton
                    className={classes.addButton}
                    onClick={() => handleplusCourseOutcome()}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    className={classes.minusButton}
                    onClick={() => handleMinusCourseOutcome()}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>
          {/* <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Attendence</TableCell>
                <TableCell align="right">Assignments</TableCell>
                <TableCell align="right">Quiz</TableCell>
                <TableCell align="right">PBL</TableCell>
                <TableCell align="right">Tutorials</TableCell>
              </TableRow>
            </TableHead> */}
          {/* <TableBody>
              <TableRow>
                <TableCell>
                  <TextField
                    variant="outlined"
                    label="No"
                    name="index"
                    value={courseOutcome.index}
                    onChange={(event) =>
                      handleChangeCourseOutcome(index3, event)
                    }
                    style={{ width: "10%" }}
                  ></TextField>
                </TableCell>
              </TableRow>
            </TableBody> */}
          {/* </Table>
        </TableContainer> */}

          <div className={classes.div1}>
            <div>
              <Typography className={classes.captionsText}>
                Reference Books
              </Typography>
            </div>

            {books.map((books, index5) => (
              <div key={index5} className={classes.insideDiv}>
                <TextField
                  variant="outlined"
                  label="Name"
                  name="Name"
                  value={books.Name}
                  onChange={(event) => handleChangeBooks(index5, event)}
                  style={{ width: "15%" }}
                />
                <TextField
                  variant="outlined"
                  label="Author"
                  name="Author"
                  value={books.Author}
                  onChange={(event) => handleChangeBooks(index5, event)}
                  style={{ width: "15%" }}
                />

                <IconButton
                  className={classes.addButton}
                  onClick={() => handlePlusBooks(index5)}
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  className={classes.minusButton}
                  onClick={() => handleMinusBooks(index5)}
                >
                  <RemoveIcon />
                </IconButton>
              </div>
            ))}
          </div>

          <Button
            className={classes.submitButton}
            onClick={() => {
              handleSubmit();
            }}
          >
            submit
          </Button>
        </Form>
      </Paper>
    </Container>
  );
};

export default CourseReport;

// <div>{data._id}</div>;
