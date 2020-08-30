import React from "react";
import "./Person.css";

import PropTypes from "prop-types";

const Person = (props) => {

import styled from "styled-components";

const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;

  @media (min-width: 500px) ": { width: "450px;
`;

const person = (props) => {
  /*  const style = {
    "@media (min-width:500px)": {
      width: "450px",
    },
  }; */

  return (
    /*     <div className="Person" style={style}>
     */

    <StyleDiv>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} year old
      </p>
      <input type="text" onChange={props.changed} />
      <h1>{props.children}</h1>
    </StyleDiv>
  );
};
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
