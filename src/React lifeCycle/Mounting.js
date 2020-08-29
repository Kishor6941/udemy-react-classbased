//Mounting

import React, { Component } from "react";

export default class Mounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteColor: "red",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "blue" });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1 className="mount">
          My favoriteColor is {this.state.favoriteColor}
        </h1>
      </div>
    );
  }
}
