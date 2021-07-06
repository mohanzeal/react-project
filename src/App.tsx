import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return React.createElement("div", { className: "App" }, [
      React.createElement(
        "h1",
        { className: "App-heading", key: 1 },
        "Hi I am a react developer"
      ),
      React.createElement(
        "h2",
        { className: "App-heading2", key: 2 },
        "started learning react"
      ),
    ]);

    // is same as below

    // return (
    //   <div className="App">
    //     <h1 className="App-heading">Hi I am a react developer</h1>
    //     <h2 className="App-heading2">started learning react</h2>
    //   </div>
    // )
  }
}

export default App;
