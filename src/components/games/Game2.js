import React, { Component } from 'react'
import './Game2.css'

export default class Game1 extends Component {
state = { active: true }

  



  render() {
    return (
      <div>
        <h1>This is the Game #2</h1>
        <p>Select the picture containing a {this.props.solution.breed} dog</p>
        <div className="Game2Solutions'">
           <img onClick={this.wrong} src={this.props.random2Img.image} alt="dog Bree to guess" className="Game2DogImg" />
           <img onClick={this.good} src={this.props.solution.image} alt="dog Bree to guess" className="Game2DogImg" /> 
           <img  onClick={this.wrong} src={this.props.random1Img.image} alt="dog Bree to guess" className="Game2DogImg" />
          
        </div>
      </div>

    )
  }
}
