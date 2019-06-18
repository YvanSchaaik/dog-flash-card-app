import React, { Component } from 'react'

export default class Game1Container extends Component {
  state = {};

  componentDidMount = () => {

      console.log('Hello World');
  }
  render() {
    return (
      <div>
        <img src="" alt="dog Bree to guess"/>
        <p>option 1</p>
        <p>option 2</p>
        <p>option 3</p>
      </div>
    )
  }
}
