import React, { Component } from "react";
import Header from "./Header";
import Body from './Body';

export default class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      [
        <Header key = "header"/>,
        <Body key = "body"/>
      ]
    );
  }
}
  