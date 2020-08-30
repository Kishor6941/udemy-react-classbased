import React from "react";
import "./Person.css";
import PropTypes from "prop-types";

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} year old
      </p>
      <input type="text" onChange={props.changed} />
      <h1>{props.children}</h1>
    </div>
  );
};
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
