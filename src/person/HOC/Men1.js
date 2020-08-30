import React, { Component } from "react";
import WithHoc from "../HOC/WithHoc";
class Men1 extends Component {
  render() {
    const { gunshots, handleGunshot } = this.props;
    return (
      <div>
        <h3 onMouseOver={handleGunshot}>Kishor gunshots={gunshots}</h3>
      </div>
    );
  }
}
export default WithHoc(Men1);
