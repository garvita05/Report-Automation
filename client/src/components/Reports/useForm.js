import React, { useState } from "react";
import useStyles from "./courseDescriptionStyles";
export function useForm(intialFValues) {
  const [values, setValues] = useState(intialFValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
}

export function Form(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off">
      {props.children}
    </form>
  );
}
