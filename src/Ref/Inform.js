import React, { Component } from "react";

class Inform extends Component {
  constructor(props) {
    super(props);
    this.inputElref = React.createRef();
  }
  componentDidMount() {
    this.inputElref.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Username" />
        <input key="i1" ref={this.inputElref} type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button type="submit">Login</button>
      </div>
    );
  }
}
export default Inform;
