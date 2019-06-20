import React, { Component } from 'react'
import './Game2.css'

export default class Game2 extends Component {
state = { active: true }


  render() {
    return (
      <div>
        <h1>This is the Game #2</h1>
        <p> you identified {this.props.score.wrong} wrong, and {this.props.score.correct} right good!       </p>
        <p>Select the picture containing a {this.props.solution.breed} dog</p>
        <div className="Game2Solutions'">
           <img onClick={this.props.wrong} src={this.props.random2Img.image} alt="dog Bree to guess" className="Game2DogImg" />
           <img onClick={this.props.good} src={this.props.solution.image} alt="dog Bree to guess" className="Game2DogImg" /> 
           <img onClick={this.props.wrong} src={this.props.random1Img.image} alt="dog Bree to guess" className="Game2DogImg" />
          
        </div>
      </div>

    )
  }
}
