import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const GetCourseDescription = () => {
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
      {data.length === 0 && <p>Nothing to fetch, No record found</p>}
      {data.map((instance, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              console.log(instance._id);
              handleClick(instance._id);
            }}
          >
            <p key={i}>{instance._id}</p>
          </div>
        );
      })}
      <p></p>
    </div>
  );
};

export default GetCourseDescription;
