import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.switchClass = this.props.onSwitchClass;
  }


  render() {
    return (
      <header className = {`header ${this.props.day ? "day" : "night"}`} onClick = {this.switchClass}>
        <button className = "fetchBtn">Fetch</button>
      </header>
    );
  }
}