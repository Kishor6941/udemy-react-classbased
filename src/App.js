import React, { Component } from "react";
import "./App.css";
import Person from "./person/Person";
import Mounting from "./React lifeCycle/Mounting";
import Updating from "./React lifeCycle/Updating";
import Inform from "./Ref/Inform";
import RefinHook from "./Ref/RefinHook";
class App extends Component {
  state = {
    persons: [
      { name: "Kishor", age: 24 },
      { name: "Sunil", age: 27 },
      { name: "Rajveer", age: 3 },
    ],
  };

  SwithNameHander = (NewName) => {
    /*     console.log("was Clicked"); */

    this.setState({
      persons: [
        { name: NewName, age: 23 },
        { name: "Sunil Phawade", age: 26 },
        { name: "Rajveer Phawade", age: 6 },
      ],
    });
  };

  Namechanged = (event) => {
    this.setState({
      persons: [
        { name: "Kishor", age: 23 },
        { name: event.target.value, age: 26 },
        { name: "Rajveer Phawade", age: 6 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "blue",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      color: "white",
    };

    return (
      <div className="App">
        <RefinHook />
        {/* <Inform /> */}
        <h1>{this.props.apptitle}</h1>
        <button style={style} onClick={this.SwithNameHander.bind(this, "KSP")}>
          {/* <button onClick={() => this.SwithNameHander("Kishor!!!!")}> */}
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.SwithNameHander.bind(this, "KSP!!!")}
          title={this.props.apptitle}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.Namechanged}
        >
          My Hobbies:Cricket
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />

        <Mounting favcol="blue" />
        <Updating />
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
