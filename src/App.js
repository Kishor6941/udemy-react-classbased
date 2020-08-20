import React, { Component } from "react";
import "./App.css";
import Person from "./person/Person";
import person from "./person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Kishor", age: 24 },
      { name: "Sunil", age: 27 },
      { name: "Rajveer", age: 3 },
    ],
    showperson: false,
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

  togglePersonHandler = () => {
    const doesShow = this.state.showperson;
    this.setState({ showperson: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    /* const persons = this.state.persons.slice(); */

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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

    let persons = null;
    if (this.state.showperson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I'm create react App</h1>
        {/* <button style={style} onClick={this.SwithNameHander.bind(this, "KSP")}> */}
        {/* <button onClick={() => this.SwithNameHander("Kishor!!!!")}> */}
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
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
