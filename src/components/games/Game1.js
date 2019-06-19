import React, { Component } from 'react'

export default class Game1 extends Component {
  render() {
    return (
      <div>
        <h1>This is the Game #1</h1>
       
        <div>
        <img src={this.props.image} alt="dog Bree to guess"/>
        <p>option 1</p>
        <p>option 2</p>
        <p>option 3</p>
      </div>
      </div>
      
    )
  }
}
