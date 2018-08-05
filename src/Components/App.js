import React, { Component } from "react";
import Storage from '../AdditionalClasses/Storage';
import Header from "./Header";
import Body from './Body';


const Store = new Storage();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day : true
    }
    this.switchClass = this.switchClass.bind(this);
  }

  switchClass() {
    console.log(this.state);
    let day = !this.state.day;
    this.setState({
        ...this.state,
        day
    })
}


  render() {
    return (
      [
        <Header day = {this.state.day} onSwitchClass = {() => this.switchClass()} key = "header"/>,
        <Body key = "body" store = {Store}/>
      ]
    );
  }
}
  