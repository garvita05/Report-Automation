import React from "react";
import useStyles from "./OpeningReportsStyles";
import { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Container,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { useForm, Form } from "./useForm";
import Controls from "../controls/Controls";
import * as dropdownService from "../../services/dropdownData";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OpeningReport = () => {
  const navigate = useNavigate();

  var [jhool, setJhool] = useState([
    {
      course_name: "software eng.",
    },
    {
      course_name: "software dev.",
    },
  ]);
  const classes = useStyles();
  const [departmentName, setDepartmentName] = useState("");
  const intialFValues = {
    departmentName: "Department of Computer Science & Enginerring and IT",
    programName: "",
    semester: "",
    branch: "",
    courseName: "",
    courseCode: "",
    innovativeTeaching: "",
    weakLearners: "",
    brightStudents: "",
    evalStrategy: "",
  };
  const { values, setValues, handleInputChange } = useForm(intialFValues);
  const [coordinator, setCoordinator] = useState([
    {
      coordinatorName: "",
      coordinatorCode: "",
    },
  ]);
  const handleCo = (index4, event) => {
    const values = [...mappingValues];
    values[index4][event.target.name] = event.target.value;
    setMappingValues(values);
  };
  const handlePlusMapping = () => {
    setMappingValues([
      ...mappingValues,
      {
        co: "",
        po1: "",
        po2: "",
        po3: "",
        po4: "",
        po5: "",
        po6: "",
        po7: "",
        po8: "",
        po9: "",
        po10: "",
        po11: "",
        po12: "",
        pso1: "",
        pso2: "",
      },
    ]);
  };

  const handleMinuMapping = (index1) => {
    const value = [...mappingValues];
    value.splice(index1, 1);
    setMappingValues(value);
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
  const handleMinusCoordinator = (index1) => {
    const value = [...coordinator];
    value.splice(index1, 1);
    setCoordinator(value);
  };
  const handleChangeCoordinator = (index1, event) => {
    const values = [...coordinator];
    values[index1][event.target.name] = event.target.value;
    setCoordinator(values);
  };
  const handleplusCourseOutcome = (index3, event) => {
    setCourseOutcome([
      ...courseOutcome,
      {
        courseOutcomeNum: "",
        courseOutcomeDescription: "",
        courseOutcomeLevel: "",
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
  const handleChangeGaps = (index5, event) => {
    const values = [...gaps];
    values[index5][event.target.name] = event.target.value;
    setGaps(values);
  };
  const handleplusGaps = (index5, event) => {
    setGaps([
      ...gaps,
      {
        topics: "",
        strengthen_cos: "",
        strengthen_pos: "",
        method: "",
      },
    ]);
  };
  const handleMinusGaps = (index5) => {
    const value = [...gaps];
    value.splice(index5, 1);
    setGaps(value);
  };
  const [courseOutcome, setCourseOutcome] = useState([
    {
      courseOutcomeNum: "",
      courseOutcomeDescription: "",
      courseOutcomeLevel: "",
    },
  ]);
  const programOptions = [
    { id: 0, title: "B.Tech(IT)" },
    { id: 1, title: "B.Tech(CSE)" },
    { id: 2, title: "INTGT(CSE)" },
    { id: 3, title: "M.Tech(CSE)" },
    { id: 4, title: "M.Tech(DA)" },
  ];
  const semesterItems = [
    { id: 0, title: "Odd" },
    { id: 1, title: "Even" },
  ];
  const [mappingValues, setMappingValues] = useState([
    {
      co: "",
      po1: "",
      po2: "",
      po3: "",
      po4: "",
      po5: "",
      po6: "",
      po7: "",
      po8: "",
      po9: "",
      po10: "",
      po11: "",
      po12: "",
      pso1: "",
      pso2: "",
    },
  ]);
  const [gaps, setGaps] = useState([
    {
      topics: "",
      strengthen_cos: "",
      strengthen_pos: "",
      method: "",
    },
  ]);

  const [modifications, setModifications] = useState([
    {
      details: "",
      Justification: "",
      strenghten_pos: "",
    },
  ]);
  const handleChangeModifications = (index6, event) => {
    const values = [...modifications];
    values[index6][event.target.name] = event.target.value;
    setModifications(values);
  };
  const handlePlusModifications = (index6, event) => {
    setModifications([
      ...modifications,
      {
        details: "",
        Justification: "",
        strenghten_pos: "",
      },
    ]);
  };
  const handleMinusModifications = (index6) => {
    const value = [...modifications];
    value.splice(index6, 1);
    setModifications(value);
  };
  const [actions, setActions] = useState([
    {
      cos: "",
      attainments: "",
      actionsToBeTaken: "",
      strengthensPoPso: "",
    },
  ]);
  const handleChangeActions = (index7, event) => {
    const values = [...actions];
    values[index7][event.target.name] = event.target.value;
    setActions(values);
  };
  const handlePlusActions = (index7, event) => {
    setActions([
      ...actions,
      {
        cos: "",
        attainments: "",
        actionsToBeTaken: "",
        strengthensPoPso: "",
      },
    ]);
  };
  const handleMinusActions = (index7) => {
    const value = [...actions];
    value.splice(index7, 1);
    setActions(value);
  };

  function handleSubmit() {
    let bucket = ["123456", "123457", "123458"];
    var obj = {
      course_code: bucket[values.courseCode - 1],
      semester: values.semester,
      Program_name: values.programName,
      Year: "2022",
      gap_table: gaps,
      modification_table: modifications,
      innovation_teaching_and_methods_to_be_used: values.innovativeTeaching,
      Actions_for_improving_Co_table: actions,
      strategies_for: [values.weakLearners, values.brightStudents],
      innovation_evaluation_strategy: values.evalStrategy,
      Module_coordinator: coordinator,
      po_pso_table: mappingValues,
    };
    console.log(obj);
    axios
      .post("http://localhost:5000/api/postOpeningreport/", obj)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("successScreen");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={classes.mainContainer}>
      <Paper className={classes.pageContent}>
        <Form>
          <Grid container>
            <Grid item xs={6}>
              <Controls.Input
                name="departmentName"
                label="Department Name"
                value={values.departmentName}
                onChange={handleInputChange}
              />
              <Controls.Select
                name="programName"
                label="Program Name"
                value={values.programName}
                onChange={handleInputChange}
                options={programOptions}

                // error={errors.creditsLecture}
              />
            </Grid>
            <Grid item>
              <Controls.RadioGroup
                name="semester"
                label="Semester"
                value={values.semester}
                onChange={handleInputChange}
                items={semesterItems}
              />
              {/* <Controls.Select
                name="courseName"
                label="Course Name"
                value={values.courseName}
                onChange={handleInputChange}
                options={dropdownService.courseNameItems()}
                // error={errors.creditsLecture}
              /> */}
              <TextField
                variant="outlined"
                label="Course Name"
                name="courseName"
                value={values.courseName}
                onChange={handleInputChange}
                style={{ width: "35%" }}
              />
              <Controls.Select
                name="courseCode"
                label="Course Code"
                value={values.courseCode}
                onChange={handleInputChange}
                options={dropdownService.courseCodeItems()}
                // error={errors.creditsLecture}
              />
            </Grid>
          </Grid>

          {coordinator.map((coordinator, index1) => (
            <div key={index1}>
              <Typography className={classes.typoText}>
                Coordinator Details
              </Typography>
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
          {courseOutcome.map((courseOutcome, index3) => (
            <div key={index3} className={classes.insideDiv}>
              <Typography className={classes.typoText}>
                Course Outcomes
              </Typography>
              <TextField
                variant="outlined"
                label="No"
                name="courseOutcomeNum"
                value={courseOutcome.courseOutcomeNum}
                onChange={(event) => handleChangeCourseOutcome(index3, event)}
                style={{ width: "10%" }}
              />
              <TextField
                variant="outlined"
                label="Course Outcome Description"
                name="courseOutcomeDescription"
                value={courseOutcome.courseOutcomeDescription}
                onChange={(event) => handleChangeCourseOutcome(index3, event)}
                style={{ width: "35%" }}
              />
              <TextField
                variant="outlined"
                label="Course Outcome Level"
                name="courseOutcomeLevel"
                value={courseOutcome.courseOutcomeLevel}
                onChange={(event) => handleChangeCourseOutcome(index3, event)}
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
          {mappingValues.map((mapppingValues, index4) => (
            <div key={index4} className={classes.insideDiv}>
              <Typography className={classes.typoText}>
                CO-PO and CO-PSO Mapping
              </Typography>
              <TextField
                variant="outlined"
                label="co"
                name="co"
                value={mappingValues.co}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "3.5%" }}
              />
              <br></br>
              <TextField
                variant="outlined"
                label="po1"
                name="po1"
                value={mappingValues.po1}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "4%" }}
              />
              <TextField
                variant="outlined"
                label="po2"
                name="po2"
                value={mappingValues.po2}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "4%" }}
              />
              <TextField
                variant="outlined"
                label="po3"
                name="po3"
                value={mappingValues.po3}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "4%" }}
              />
              <TextField
                variant="outlined"
                label="po4"
                name="po4"
                value={mappingValues.po4}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "4%" }}
              />
              <TextField
                variant="outlined"
                label="po5"
                name="po5"
                value={mappingValues.po5}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "4%" }}
              />
              <TextField
                variant="outlined"
                label="po6"
                name="po6"
                value={mappingValues.po6}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "4%" }}
              />
              <TextField
                variant="outlined"
                label="po7"
                name="po7"
                value={mappingValues.po7}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "4%" }}
              />
              <TextField
                variant="outlined"
                label="po8"
                name="po8"
                value={mappingValues.po8}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "4%" }}
              />
              <TextField
                variant="outlined"
                label="po9"
                name="po9"
                value={mappingValues.po9}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "4%" }}
              />
              <TextField
                variant="outlined"
                label="po10"
                name="po10"
                value={mappingValues.po10}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "5%" }}
              />
              <TextField
                variant="outlined"
                label="po11"
                name="po11"
                value={mappingValues.po11}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "5%" }}
              />
              <TextField
                variant="outlined"
                label="po12"
                name="po12"
                value={mappingValues.po12}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "5%" }}
              />
              <TextField
                variant="outlined"
                label="po12"
                name="po12"
                value={mappingValues.po12}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "5%" }}
              />
              <TextField
                variant="outlined"
                label="pso1"
                name="pso1"
                value={mappingValues.ps01}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "5%" }}
              />
              <TextField
                variant="outlined"
                label="pso2"
                name="pso2"
                value={mappingValues.ps02}
                onChange={(event) => handleCo(index4, event)}
                style={{ width: "5%" }}
              />

              <IconButton
                className={classes.addButton}
                onClick={() => handlePlusMapping()}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                className={classes.minusButton}
                onClick={() => handleMinuMapping()}
              >
                <RemoveIcon />
              </IconButton>
            </div>
          ))}
          {gaps.map((gaps, index5) => (
            <div key={index5} className={classes.insideDiv}>
              <Typography className={classes.typoText}>
                Identified Gaps in Syllabus/Course Description(if any)
              </Typography>
              <TextField
                variant="outlined"
                label="Topics to be introduced"
                name="topics"
                value={gaps.topics}
                onChange={(event) => handleChangeGaps(index5, event)}
                style={{ width: "20%" }}
              />
              <TextField
                variant="outlined"
                label="Strengthen CO"
                name="strengthen_cos"
                value={gaps.strengthen_cos}
                onChange={(event) => handleChangeGaps(index5, event)}
                style={{ width: "20%" }}
              />
              <TextField
                variant="outlined"
                label="Strengthen PO,PSO"
                name="strengthen_pos"
                value={gaps.strengthen_pos}
                onChange={(event) => handleChangeGaps(index5, event)}
                style={{ width: "20%" }}
              />
              <TextField
                variant="outlined"
                label="Method Of Indentification"
                name="methodOfIndentification"
                value={gaps.methodOfIndentification}
                onChange={(event) => handleChangeGaps(index5, event)}
                style={{ width: "20%" }}
              />
              <IconButton
                className={classes.addButton}
                onClick={() => handleplusGaps()}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                className={classes.minusButton}
                onClick={() => handleMinusGaps()}
              >
                <RemoveIcon />
              </IconButton>
            </div>
          ))}
          {modifications.map((modifications, index6) => (
            <div key={index6} className={classes.insideDiv}>
              <Typography className={classes.typoText}>
                Modifications in Syllabus/ Course Description (If Any):
              </Typography>
              <TextField
                variant="outlined"
                label="Details of Modification (Addition/Removal)"
                name="details"
                value={modifications.details}
                onChange={(event) => handleChangeModifications(index6, event)}
                style={{ width: "35%" }}
              />
              <TextField
                variant="outlined"
                label="Justification"
                name="Justification"
                value={modifications.Justification}
                onChange={(event) => handleChangeModifications(index6, event)}
                style={{ width: "15%" }}
              />
              <TextField
                variant="outlined"
                label="Strengthens POs/PSOs"
                name="strenghten_pos"
                value={modifications.strenghten_pos}
                onChange={(event) => handleChangeModifications(index6, event)}
                style={{ width: "20%" }}
              />
              <IconButton
                className={classes.addButton}
                onClick={() => handlePlusModifications(index6)}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                className={classes.minusButton}
                onClick={() => handleMinusModifications(index6)}
              >
                <RemoveIcon />
              </IconButton>
            </div>
          ))}
          {actions.map((actions, index7) => (
            <div key={index7} className={classes.insideDiv}>
              <Typography className={classes.typoText}>
                Actions for Improving CO Attainments:
              </Typography>
              <TextField
                variant="outlined"
                label="COS"
                name="cos"
                value={actions.cos}
                onChange={(event) => handleChangeActions(index7, event)}
                style={{ width: "5%" }}
              />
              <TextField
                variant="outlined"
                label="Attainments in 2021-22"
                name="attainments"
                value={actions.attainments}
                onChange={(event) => handleChangeActions(index7, event)}
                style={{ width: "15%" }}
              />
              <TextField
                variant="outlined"
                label="Strengthens POs/PSOs"
                name="strenghten_pos"
                value={modifications.strenghten_pos}
                onChange={(event) => handleChangeActions(index7, event)}
                style={{ width: "20%" }}
              />
              <IconButton
                className={classes.addButton}
                onClick={() => handlePlusActions(index7)}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                className={classes.minusButton}
                onClick={() => handleMinusActions(index7)}
              >
                <RemoveIcon />
              </IconButton>
            </div>
          ))}
          <Typography className={classes.typoText}>
            Innovative Teaching and Learning Method To Be Used
          </Typography>
          <TextField
            multiline
            variant="outlined"
            label="Innovative Teaching and Learning Method to be Used"
            name="innovativeTeaching"
            value={values.innovativeTeaching}
            onChange={handleInputChange}
            style={{ width: "80%", height: "70%" }}
          />
          <Typography className={classes.typoText}>Strategies For:</Typography>
          <Typography className={classes.typoText}>1) Weak Learners</Typography>
          <TextField
            multiline
            variant="outlined"
            label="Weak Learners"
            name="weakLearners"
            value={values.weakLearners}
            onChange={handleInputChange}
            style={{ width: "80%", height: "70%" }}
          />
          <Typography className={classes.typoText}>
            1) Bright Students
          </Typography>
          <TextField
            multiline
            variant="outlined"
            label="Bright Students"
            name="brightStudents"
            value={values.brightStudents}
            onChange={handleInputChange}
            style={{ width: "80%", height: "70%" }}
          />
          <Typography className={classes.typoText}>
            Innovation Evaluation Strategy To Be Used(If any)
          </Typography>
          <TextField
            multiline
            variant="outlined"
            label="Innovation Evaluation Strategy To Be Used(If any)"
            name="evalStrategy"
            value={values.evalStrategy}
            onChange={handleInputChange}
            style={{ width: "80%", height: "70%" }}
          />
        </Form>
        <Button onClick={handleSubmit}>submit</Button>
      </Paper>
    </div>
  );
};

export default OpeningReport;
