import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm create react App</h1>
      </div>
    );
    /* 
    return React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", "null", "Create react App")
    ); */
  }
}

export default App;
