import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Animal from "./Animal/Animal";
import Post from "./Posts/Post";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
class App extends Component {
  state = {
    firstName: "john",
    lastName: "doe",
    persons: [
      {
        firstName: "lohit",
        lastName: "bane",
      }
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

  renderPeople = () => {
    return this.state.persons.map((person: any, index: number) => {
      return (
        <div key={index}>
          <button
            onClick={this.toggleFirstNameHandler("changed john", "changed doe")}
          >
            Switch name
          </button>
          <div >
            <Person
              change={($event: React.ChangeEvent<HTMLInputElement>) =>
                this.changeNameHandler($event, index)
              }
              firstName={person.firstName}
              lastName={person.lastName}
            />
            <Animal firstName={person.firstName} />
          </div>
        </div>
      );
    });
  };

  renderHome = () => {
    return <div>Home</div>;
  };

  render() {
    console.log("App.tsx render");
    return (
      <BrowserRouter>
        <div className="App">
          <ul className="App-nav">
            <li>
              <NavLink activeClassName="highlight" to="/blog">blog</NavLink>
            </li>
            <li>
              <NavLink to="/home">home</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: "/people",
                hash: "#submit",
                search: '?type=people'
              }}>people</NavLink>
            </li>
          </ul>
          <Route path="/blog" exact component={Post}></Route>
          <Route path="/home" exact render={() => this.renderHome()}></Route>
          <Route
            path="/people"
            exact
            render={() => this.renderPeople()}
          ></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
