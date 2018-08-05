import React, { Component } from "react";

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      num : 0
    };

    this.logState = this.logState.bind(this);
  }

  logState() {
      console.log(this.state);
      let num = ++this.state.num;
      this.setState({
          ...this.state,
          num
      })
  }

  render() {
    return (
      <div className = "body" onClick = {this.logState}>Hello world!
        <div className = "text">{this.state.num}</div>
      </div>
    );
  }
}