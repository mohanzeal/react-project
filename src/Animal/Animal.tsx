import * as React from "react";

export interface AnimalProps {
  firstName: string;
}

export interface AnimalState {}

class Animal extends React.Component<AnimalProps, AnimalState> {
  constructor(props: any) {
    super(props);
    this.state = { test: "animal comp. local state" };
    console.log("Animal.tsx constructor");
  }

  static getDerivedStateFromProps(props: any, state: any) {
    console.log("Animal.tsx getDerivedStateFromProps", props, state);
    return state;
  }

  componentDidMount() {
    console.log("Animal.tsx componentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log("Animal.tsx getSnapshotBeforeUpdate", prevProps, prevState);
    return prevState;
  }

  componentDidUpdate(nextProps: any, nextState: any) {
    console.log("Animal.tsx componentDidUpdate", nextProps, nextState);
  }

  personStateChange($event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ test: $event.target.value });
  }

  componentDidCatch(error: any, info: any) {
    console.log(error, info);
  }

  render() {
    console.log("Animal.tsx render");
    return <div>Animal Class {this.props.firstName}</div>;
  }
}

export default Animal;
