import React, { Component } from 'react'
import './Game1.css'

export default class Game1 extends Component {
  render() {
    return (
      <div>
        <h1>This is the Game #1</h1>
       
        <div>
        <img className="guessImage" src={this.props.solution.image} alt="dog Bree to guess"/>
        <p>option 1</p>
        <p>{ this.props.solution.breed}</p>
        <p>option 3</p>
      </div>
      </div>
      
    )
  }
}
