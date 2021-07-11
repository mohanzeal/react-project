import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Animal from "./Animal/Animal";
import Post from "./Posts/Post";

class App extends Component {
  state = {
    firstName: "john",
    lastName: "doe",
    persons: [
      {
        firstName: "lohit",
        lastName: "bane",
      },
      // {
      //   firstName: 'rithesh',
      //   lastName: 'bane'
      // },
      // {
      //   firstName: 'mohan',
      //   lastName: 'bane'
      // },
    ],
  };

  constructor(props: any) {
    super(props);
    console.log("App.tsx constructor");
  }

  static getDerivedStateFromProps(props: any, state: any) {
    console.log("App.tsx getDerivedStateFromProps", props, state);
    return state;
  }

  componentDidMount() {
    console.log("App.tsx componentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log(
      "App.tsx getSnapshotBeforeUpdate",
      prevProps,
      prevState,
      this.state
    );
    return prevState;
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log("App.tsx shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentDidUpdate(nextProps: any, nextState: any) {
    console.log("App.tsx componentDidUpdate", nextProps, nextState);
  }

  toggleFirstNameHandler = (changedName: string, changedLastName: string) => {
    return () => {
      this.setState({ firstName: changedName, lastName: changedLastName });
      console.log("clicked", this.state);
    };
  };

  changeNameHandler = (
    $event: React.ChangeEvent<HTMLInputElement>,
    personIndex: number
  ) => {
    let state = this.state;
    state.persons[personIndex]["firstName"] = $event.target.value;
    this.setState(state);
  };

  render() {
    console.log("App.tsx render");
    return (
      <div className="App">
        <h1 className="App-heading">Hi I am a react developer</h1>
        <h2 className="App-heading2">started learning react</h2>
        <button
          onClick={this.toggleFirstNameHandler("changed john", "changed doe")}
        >
          Switch name
        </button>
        {this.state.persons.map((person: any, index: number) => {
          return (
            <div key={index}>
              <Person
                change={($event: React.ChangeEvent<HTMLInputElement>) =>
                  this.changeNameHandler($event, index)
                }
                firstName={person.firstName}
                lastName={person.lastName}
              />
              <Animal firstName={person.firstName} />
            </div>
          );
        })}
        <Post />
      </div>
    );
  }
}

export default App;
