import React, { Component } from "react";
import "./App.css";
import Person from "./person/Person";
import Mounting from "./React lifeCycle/Mounting";
import Updating from "./React lifeCycle/Updating";
import Men1 from "./person/HOC/Men1";
import Men2 from "./person/HOC/Men2";


class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Kishor", age: 24 },
      { id: 2, name: "Sunil", age: 27 },
      { id: 3, name: "Rajveer", age: 3 },
    ],
    showperson: false,
  };

  Namechanged = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
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
      padding: "10px",
      cursor: "pointer",
      color: "white",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
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
                key={person.id}
                changed={(event) => this.Namechanged(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "lightred",
        color: "black",
      };
    }
    let classes = []; //["red", "bold"].join(" ");
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <div className="App">

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

        <Men1 />
        <Men2 />


        <h1>I'm create react App</h1>
        <p className={classes.join(" ")}>This is really working</p>
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
