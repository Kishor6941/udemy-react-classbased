import React, { Component } from "react";

export default class Updating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoritecolor: "red",
    };
  }
  /* 
  shouldComponentUpdate() {
    return false;
  } */
  /* changeColor = (event) => {
    event.preventDefault();
    this.setState({ favoritecolor: "blue" });
  }; */

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "Green" });
    }, 3000);
  }
  /* getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite color was " + prevState.favoritecolor;
  } */
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The Updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        {/* <button type="button" onClick={this.changeColor}>
          Change Color
        </button> */}
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
