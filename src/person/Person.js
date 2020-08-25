import React from "react";
import "./Person.css";

const person = (props) => {
  const style = {
    "@media (min-width:500px)": {
      width: "450px",
    },
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} year old
      </p>
      <input type="text" onChange={props.changed} />
      <h1>{props.children}</h1>
    </div>
  );
};

export default person;
