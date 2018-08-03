import React, { Component } from "react";
// import ReactDOM from "react-dom";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <div className = "App">Hello world!</div>
    );
  }
}