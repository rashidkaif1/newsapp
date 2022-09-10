import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'rashid';
  render() {
    return (
      <div>
        Hello my first class based componnent {this.c}
      </div>
    )
  }
}
