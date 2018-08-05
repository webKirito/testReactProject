import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      className : 'day'
    };

    this.switchClass = this.switchClass.bind(this);
  }

  switchClass() {
      console.log(this.state);
      let className = this.state.className === "day" ? "night" : 'day';
      this.setState({
          ...this.state,
          className
      })
  }

  render() {
    return (
      <header className = {"header " + this.state.className} onClick = {this.switchClass}>
        <button className = "fetchBtn">Fetch</button>
      </header>
    );
  }
}