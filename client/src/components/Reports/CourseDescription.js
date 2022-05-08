import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { Paper } from "@material-ui/core";
import useStyles from "./styles";
import { mergeClasses } from "@material-ui/styles";
import { DropdownButton, Dropdown } from "@material-ui/core";
const CourseDescription = () => {
  const [inputFeilds, setInputFeilds] = useState([
    {
      moduleName: "",
      moduleDescription: "",
      moduleLectures: "",
    },
  ]);
  const [coordinator, setCoordinator] = useState([
    {
      coordinatorName: "",
      coordinatorCode: "",
    },
  ]);
  const [faculty, setFaculty] = useState([
    {
      facultyName: "",
      facultyCode: "",
    },
  ]);

  const [recommendedBooks, setRecommendedBooks] = useState([
    {
      bookName: "",
    },
  ]);
  const [courseCode, setCourseCode] = useState("");
  const [semesterTime, setSemesterTime] = useState("");
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [monthFrom, setMonthFrom] = useState("");
  const [monthTo, setMonthTo] = useState("");
  const [session, setSession] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCreditLecture, setCourseCreditLecture] = useState("");
  const [contactHours, setContactHours] = useState("");
  const [courseCreditTutorial, setCourseCreditTutorial] = useState("");
  const [courseCreditLab, setCourseCreditLab] = useState("");

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
        facultyName: "",
        facultyCode: "",
      },
    ]);
  };

  const handleChangeCoordinator = (index1, event) => {
    const values = [...coordinator];
    values[index1][event.target.name] = event.target.value;
    setCoordinator(values);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFeilds", inputFeilds);
  };

  const handleplus = () => {
    setInputFeilds([
      ...inputFeilds,
      {
        moduleName: "",
        moduleDescription: "",
        moduleLectures: "",
      },
    ]);
  };
  const handleMinus = (index) => {
    const value = [...inputFeilds];
    value.splice(index, 1);
    setInputFeilds(value);
  };
  const classes = useStyles();

  return (
    <Container>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit}>
          <h1 style={{ alignContent: "center", alignItems: "center" }}>
            Course Description
          </h1>
          <label>
            Course Name:
            <select
              value={courseName}
              onChange={(event) => {
                setCourseName(event.target.value);
                setCourseCode(
                  event.target.value ===
                    "Fundamentals of Distributed and Cloud Computing"
                    ? "MA324"
                    : event.target.value ===
                      "Computer Networks and internet of things"
                    ? "PK789"
                    : event.target.value === "Applied Mathematics"
                    ? "IKA899"
                    : "GH763"
                );
              }}
            >
              <option selected value="null">
                Select
              </option>
              <option value="Fundamentals of Distributed and Cloud Computing">
                Fundamentals of Distributed and Cloud Computing
              </option>
              <option value="Computer Networks and internet of things">
                Computer Networks and internet of things
              </option>
              <option value="Applied Mathematics">Applied Mathematics</option>
              <option value="Web Technology and Cyber Security">
                Web Technology and Cyber Security
              </option>
            </select>
          </label>
          {/* <TextField
            name="CourseName"
            label="Course Name"
            value={courseName}
            onChange={(event) => setCourseName(event.target.value)}
          /> */}
          <div style={{ height: 20 }}></div>
          <label>
            Course Code:
            <TextField
              name="CourseCode"
              value={courseCode}
              onChange={(event) => setCourseCode(event.target.value)}
            />
          </label>
          <div style={{ height: 20 }}></div>
          <label>
            Semester Type:
            <select
              value={semester}
              onChange={(event) => setSemester(event.target.value)}
            >
              <option selected value="null">
                Select
              </option>
              <option value="odd">Odd</option>
              <option value="even">Even</option>
            </select>
          </label>
          <div style={{ height: 20 }}></div>
          <label>
            Branch:
            <select
              value={branch}
              onChange={(event) => setBranch(event.target.value)}
            >
              <option selected value="null">
                Select
              </option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>

              <option value="BioTech">BioTech</option>
            </select>
          </label>
          <div style={{ height: 20 }}></div>
          <label>
            Month From:
            <select
              value={monthFrom}
              onChange={(event) => setMonthFrom(event.target.value)}
            >
              <option selected value="null">
                Select
              </option>
              <option value="Jan">January</option>
              <option value="Feb">February</option>

              <option value="Mar">March</option>
              <option value="Apr">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="Sept">September</option>
              <option value="Oct">October</option>
              <option value="Nov">November</option>
              <option value="Dec">December</option>
            </select>
          </label>
          <label>
            Month To:
            <select
              value={monthTo}
              onChange={(event) => setMonthTo(event.target.value)}
            >
              <option selected value="null">
                Select
              </option>
              <option value="Jan">January</option>
              <option value="Feb">February</option>

              <option value="Mar">March</option>
              <option value="Apr">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="Sept">September</option>
              <option value="Oct">October</option>
              <option value="Nov">November</option>
              <option value="Dec">December</option>
            </select>
          </label>
          <div style={{ height: 20 }}></div>
          <label>Course Credits(L:T:P):</label>
          <label>
            <select
              value={courseCreditLecture}
              onChange={(event) => setCourseCreditLecture(event.target.value)}
            >
              <option selected value="null">
                L
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </label>
          <label>
            <select
              value={courseCreditTutorial}
              onChange={(event) => setCourseCreditTutorial(event.target.value)}
            >
              <option selected value="null">
                T
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </label>
          <label>
            <select
              value={courseCreditLab}
              onChange={(event) => setCourseCreditLab(event.target.value)}
            >
              <option selected value="null">
                P
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </label>
          <label>
            Contact Hours:
            <select
              value={contactHours}
              onChange={(event) => setContactHours(event.target.value)}
            >
              <option selected value="null">
                select
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </label>

          <div style={{ height: 20 }}></div>

          <div style={{ height: 20 }}></div>

          <div style={{ height: 20 }}></div>
          {/* <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={10}
            variant="outlined"
            maxRows={Infinity}
          />
          <h2>Enter Evaluation Criteria</h2> */}
          <h3>Enter coordinator details:</h3>

          {coordinator.map((coordinator, index1) => (
            <label>
              <div
                key={index1}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  left: 0,
                  margin: 20,
                }}
              >
                <TextField
                  name="coordinatorName"
                  label="Coordinator Name"
                  variant="filled"
                  value={coordinator.coordinatorName}
                  onChange={(event) => handleChangeCoordinator(index1, event)}
                />

                <TextField
                  name="coordinatorCode"
                  label="Coordinator Code"
                  variant="filled"
                  value={coordinator.coordinatorCode}
                  onChange={(event) => handleChangeCoordinator(index1, event)}
                />
                <IconButton onClick={() => handleMinusCoordinator(index1)}>
                  <RemoveIcon />
                </IconButton>
                <IconButton onClick={() => handleplusCoordinator()}>
                  <AddIcon />
                </IconButton>
              </div>
            </label>
          ))}
          <h3>Enter faculty details:</h3>

          {faculty.map((faculty, index2) => (
            <label>
              <div
                key={index2}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  left: 0,
                  margin: 20,
                }}
              >
                <TextField
                  name="facultyName"
                  label="Faculty Name"
                  variant="filled"
                  value={faculty.facultyName}
                  onChange={(event) => handleChangeFaculty(index2, event)}
                />

                <TextField
                  name="facultyCode"
                  label="Faculty Code"
                  variant="filled"
                  value={faculty.facultyCode}
                  onChange={(event) => handleChangeFaculty(index2, event)}
                />
                <IconButton onClick={() => handleMinusFaculty(index2)}>
                  <RemoveIcon />
                </IconButton>
                <IconButton onClick={() => handleplusFaculty()}>
                  <AddIcon />
                </IconButton>
              </div>
            </label>
          ))}

          {/* <form onSubmit={handleSubmit}> */}
          <h3>Enter module details:</h3>
          {inputFeilds.map((inputFeilds, index) => (
            <label>
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  left: 0,
                  margin: 20,
                }}
              >
                <TextField
                  name="moduleName"
                  label="Module Name"
                  variant="filled"
                  value={inputFeilds.moduleName}
                  onChange={(event) => handleChangeInput(index, event)}
                />

                <TextField
                  name="moduleDescription"
                  label="Topics in the Module"
                  variant="filled"
                  value={inputFeilds.moduleDescription}
                  onChange={(event) => handleChangeInput(index, event)}
                />
                <TextField
                  name="moduleLectures"
                  label="Lectures in the module"
                  variant="filled"
                  value={inputFeilds.moduleLectures}
                  onChange={(event) => handleChangeInput(index, event)}
                />
                <IconButton onClick={() => handleMinus(index)}>
                  <RemoveIcon />
                </IconButton>
                <IconButton onClick={() => handleplus()}>
                  <AddIcon />
                </IconButton>
              </div>
            </label>
          ))}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
            style={{ margin: 20 }}
          >
            Send
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CourseDescription;
