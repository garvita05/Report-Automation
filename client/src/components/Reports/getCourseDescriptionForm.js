import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";
import useStyles from "./getCourseStyles";
import { AiFillFileImage } from "react-icons/ai";
const GetCourseDescription = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/getAllCourseDescription")
      .then((res) => {
        console.log(res.data.message);
        setData(res.data.message);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(error);
        setTimeout(() => {
          setLoading(false);
          setError(true);
        }, 10000);
      });
  }, []);
  if (loading === true) {
    return <p>Fetching Data.....</p>;
  }
  if (error === true) {
    return <p>Fetching data failed,please check your connection.</p>;
  }
  const handleClick = (id) => {
    navigate("courseReport", { state: { id } });
  };
  return (
    <div>
      <Paper className={classes.pageContent}>
        <Typography className={classes.typoText}>
          Edit your Existing Course Description Reports:
        </Typography>
        {data.length === 0 && <p>Nothing to fetch, No record found</p>}
        {data.map((instance, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                console.log(instance._id);
                handleClick(instance._id);
              }}
              className={classes.divMain}
            >
              <AiFillFileImage />

              <Typography key={i} className={classes.idText}>
                {instance._id}
              </Typography>
            </div>
          );
        })}
      </Paper>
      <p></p>
    </div>
  );
};

export default GetCourseDescription;
