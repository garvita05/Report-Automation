import {
  Grid,
  Paper,
  Container,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./attainmentReportStyles";
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
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AttainmentReport = () => {
  let navigate = useNavigate();

  function handleSubmit() {
    console.log("clicked");
    let bucket = ["123456", "123457", "123458"];
    var obj = {
      course_code: values.courseCode,
      NBA_code: values.nbaCode,
      semester: values.semester,
      academic_year: values.academicYear,
      avg_co_attainment_table: attainmentLab,
      co_po_table_mapping: mappingValues,
      innovative_evaluation_strategy_used: values.innovationStrategy,
      innovative_teaching_and_learning_methods_used: values.innovativeTeaching,
      Suggestions_for_improvement: suggestions,
    };
    console.log(obj);
    axios
      .post("http://localhost:5000/api/postattainmentReport", obj)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("successScreen");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const classes = useStyles();
  const intialFValues = {
    innovativeTeaching: "",
    innovationStrategy: "",
    semester: "",
    academicYear: "",
    nbaCode: "",
    courseCode: "",
  };
  const { values, setValues, handleInputChange } = useForm(intialFValues);
  const [attainmentLab, setAttainmentLab] = useState([
    {
      coNum: "",
      eval1: "",
      labTest1: "",
      eval28: "",
      eval27: "",
      project: "",
      labtest2: "",
      feedback: "",
    },
  ]);
  const [suggestions, setSuggestions] = useState([
    {
      sNum: "",
      suggestion: "",
      relevanceToCo: "",
      relevanceToPoPso: "",
    },
  ]);
  const handleMinusSuggestions = (index2) => {
    const value = [...suggestions];
    value.splice(index2, 1);
    setSuggestions(value);
  };
  const handleChangeSuggestions = (index2, event) => {
    const values = [...suggestions];
    values[index2][event.target.name] = event.target.value;
    setSuggestions(values);
  };
  const handlePlusSuggestions = (index2, event) => {
    setSuggestions([
      ...suggestions,
      {
        sNum: "",
        suggestion: "",
        relevanceToCo: "",
        relevanceToPoPso: "",
      },
    ]);
  };
  const handlePlusAttainmentLab = (index1, event) => {
    setAttainmentLab([
      ...attainmentLab,
      {
        coNum: "",
        eval1: "",
        labTest1: "",
        eval28: "",
        eval27: "",
        project: "",
        labtest2: "",
        feedback: "",
      },
    ]);
  };

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
  const handleMinusAttainmentLab = (index1) => {
    const value = [...attainmentLab];
    value.splice(index1, 1);
    setAttainmentLab(value);
  };
  const handleChangeAttainmentLab = (index1, event) => {
    const values = [...attainmentLab];
    values[index1][event.target.name] = event.target.value;
    setAttainmentLab(values);
  };
  return (
    <div className={classes.mainContainer}>
      <Paper className={classes.pageContent}>
        {attainmentLab.map((attainmentLab, index1) => (
          <div key={index1} className={classes.insideDiv}>
            <Typography className={classes.typoText}>
              Average CO-Attainment
            </Typography>
            <TextField
              variant="outlined"
              label="COs"
              name="coNum"
              value={attainmentLab.coNum}
              onChange={(event) => handleChangeAttainmentLab(index1, event)}
              style={{ width: "10%" }}
            />
            <TextField
              variant="outlined"
              label="Eval-1[15]"
              name="eval1"
              value={attainmentLab.eval1}
              onChange={(event) => handleChangeAttainmentLab(index1, event)}
              style={{ width: "35%" }}
            />
            <TextField
              variant="outlined"
              label="Lab Test-1[20]"
              name="labTest1"
              value={attainmentLab.labTest1}
              onChange={(event) => handleChangeAttainmentLab(index1, event)}
              style={{ width: "35%" }}
            />
            <TextField
              variant="outlined"
              label="Eval-2[8]"
              name="eval28"
              value={attainmentLab.eval28}
              onChange={(event) => handleChangeAttainmentLab(index1, event)}
              style={{ width: "35%" }}
            />
            <TextField
              variant="outlined"
              label="Eval-2[7]"
              name="eval27"
              value={attainmentLab.eval27}
              onChange={(event) => handleChangeAttainmentLab(index1, event)}
              style={{ width: "35%" }}
            />
            <TextField
              variant="outlined"
              label="Project-[15]"
              name="project"
              value={attainmentLab.project}
              onChange={(event) => handleChangeAttainmentLab(index1, event)}
              style={{ width: "35%" }}
            />
            <TextField
              variant="outlined"
              label="LabTest-2[20]"
              name="labTest2"
              value={attainmentLab.labTest2}
              onChange={(event) => handleChangeAttainmentLab(index1, event)}
              style={{ width: "35%" }}
            />
            <TextField
              variant="outlined"
              label="Student Feedback"
              name="feedback"
              value={attainmentLab.feedback}
              onChange={(event) => handleChangeAttainmentLab(index1, event)}
              style={{ width: "35%" }}
            />
            <IconButton
              className={classes.addButton}
              onClick={() => handlePlusAttainmentLab()}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              className={classes.minusButton}
              onClick={() => handleMinusAttainmentLab()}
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
              style={{ width: "5%" }}
              className={classes.mapping}
            />

            <TextField
              variant="outlined"
              label="po1"
              name="po1"
              value={mappingValues.po1}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="po2"
              name="po2"
              value={mappingValues.po2}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="po3"
              name="po3"
              value={mappingValues.po3}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="po4"
              name="po4"
              value={mappingValues.po4}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="po5"
              name="po5"
              value={mappingValues.po5}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="po6"
              name="po6"
              value={mappingValues.po6}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="po7"
              name="po7"
              value={mappingValues.po7}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="po8"
              name="po8"
              value={mappingValues.po8}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="po9"
              name="po9"
              value={mappingValues.po9}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="po10"
              name="po10"
              value={mappingValues.po10}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="po11"
              name="po11"
              value={mappingValues.po11}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="po12"
              name="po12"
              value={mappingValues.po12}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="po12"
              name="po12"
              value={mappingValues.po12}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="pso1"
              name="pso1"
              value={mappingValues.ps01}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="pso2"
              name="pso2"
              value={mappingValues.ps02}
              onChange={(event) => handleCo(index4, event)}
              style={{ width: "5%" }}
              className={classes.mapping}
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
        {suggestions.map((suggestions, index2) => (
          <div key={index2} className={classes.insideDiv}>
            <Typography className={classes.typoText}>
              Suggestions for Improvement
            </Typography>
            <TextField
              variant="outlined"
              label="sNum"
              name="sNum"
              value={suggestions.sNum}
              onChange={(event) => handleChangeSuggestions(index2, event)}
              style={{ width: "10%" }}
              className={classes.mapping}
            />

            <TextField
              variant="outlined"
              label="suggestion"
              name="suggestion"
              value={suggestions.suggestion}
              onChange={(event) => handleChangeSuggestions(index2, event)}
              style={{ width: "10%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="relevance To Co"
              name="relevanceToCo"
              value={suggestions.relevanceToCo}
              onChange={(event) => handleChangeSuggestions(index2, event)}
              style={{ width: "20%" }}
              className={classes.mapping}
            />
            <TextField
              variant="outlined"
              label="relevance To Po Pso"
              name="relevanceToPoPso"
              value={suggestions.relevanceToPoPso}
              onChange={(event) => handleChangeSuggestions(index2, event)}
              style={{ width: "20%" }}
              className={classes.mapping}
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

        <Typography className={classes.typoText}>
          Innovation Evaluation Strategy Used(If any)
        </Typography>
        <TextField
          multiline
          variant="outlined"
          label="Innovation Evaluation Strategy Used(If any)"
          name="innovationStrategy"
          value={values.innovationStrategy}
          onChange={handleInputChange}
          style={{ width: "80%" }}
        />
        <Typography className={classes.typoText}>
          Innovative Teaching and Learning Method Used
        </Typography>
        <TextField
          multiline
          variant="outlined"
          label="Innovative Teaching and Learning Method  Used"
          name="innovativeTeaching"
          value={values.innovativeTeaching}
          onChange={handleInputChange}
          style={{ width: "80%" }}
        />
        <Typography className={classes.typoText}>Semester</Typography>
        <TextField
          multiline
          variant="outlined"
          label="Semester"
          name="semester"
          value={values.semester}
          onChange={handleInputChange}
        />
        <Typography className={classes.typoText}>NBA code</Typography>
        <TextField
          multiline
          variant="outlined"
          label="NBA Code"
          name="nbaCode"
          value={values.nbaCode}
          onChange={handleInputChange}
        />
        <Typography className={classes.typoText}>Academic Year</Typography>
        <TextField
          multiline
          variant="outlined"
          label="Academic Year"
          name="academicYear"
          value={values.academicYear}
          onChange={handleInputChange}
        />
        <Typography className={classes.typoText}>Course code</Typography>
        <TextField
          multiline
          variant="outlined"
          label="Course Code"
          name="courseCode"
          value={values.courseCode}
          onChange={handleInputChange}
        />

        <Button
          className={classes.submitButton}
          onClick={() => {
            handleSubmit();
          }}
        >
          submit
        </Button>
      </Paper>
    </div>
  );
};

export default AttainmentReport;
