import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
export interface PersonPros {
  firstName: string;
  lastName: string;
  abc?: string;
  change: React.ChangeEventHandler;
}
class Person extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { test: "person comp. local state" };
    console.log("Person.tsx constructor", this.props);
  }

  static getDerivedStateFromProps(props: any, state: any) {
    console.log("Person.tsx getDerivedStateFromProps", props, state);
    return state;
  }

  componentDidMount() {
    console.log('props', this.props)
    console.log("Person.tsx componentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log("Person.tsx getSnapshotBeforeUpdate", prevProps, prevState);
    return prevState;
  }

  componentDidUpdate(nextProps: any, nextState: any) {
    console.log("Person.tsx componentDidUpdate", nextProps, nextState);
  }

  personStateChange($event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ test: $event.target.value });
  }

  componentDidCatch(error: any, info: any) {
    console.log(error, info);
  }

  render() {
    console.log("Person.tsx render");
    return (
      <div>
        <div>
          My name is {this.props.firstName} {this.props.lastName}
        </div>
        <div>
          <input
            type="text"
            onChange={this.props.change}
            value={this.props.firstName}
          />
          <input
            type="text"
            onChange={($event: React.ChangeEvent<HTMLInputElement>) => {
              this.personStateChange($event);
            }}
            value={this.state.test}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Person);
