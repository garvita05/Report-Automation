import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Paper, Grid, Table } from "@material-ui/core";
import { Typography } from "@material-ui/core";
const CourseReport = () => {
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
    <div>
      <Paper>
        <Grid container>
          <Grid item xs={12}>
            <h2> Semester </h2>
            <ul>
              <li>{data.semester}</li>
            </ul>
            <h2>Text Books</h2>
            {data.text_Book_table.map((index) => {
              console.log(index);
              return (
                <div>
                  <ul>
                    <li>Name: {index.Name}</li>
                    <li>Author: {index.Author}</li>
                  </ul>
                </div>
              );
            })}
            <h2>Modules</h2>
            {data.Module_table.map((index) => {
              console.log(index);
              return (
                <div>
                  <ul>
                    <li>Module Name: {index.module_no}</li>
                    <li>Module Description: {index.title}</li>
                    <li>Topic: {index.topic}</li>
                  </ul>
                </div>
              );
            })}
            <h2> Access the report from here</h2>
            <ul>
              <li>{data.report_url}</li>
            </ul>

            {/* {data.Module_table.forEach((table) => {
              for (let key in table) {
                console.log(`${key}: ${table[key]}`);
              }
            })} */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CourseReport;

// <div>{data._id}</div>;
