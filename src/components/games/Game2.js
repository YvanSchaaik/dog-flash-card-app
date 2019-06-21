import React, { Component } from 'react'
import './Game2.css'

export default class Game2 extends Component {
state = { active: true }


  render() {
    return (
      <div>
        <p> you identified {this.props.score.wrong} wrong, and {this.props.score.correct} right good!       </p>
        <p>Select the picture containing a< strong> {this.props.solution.breed} </strong> dog </p>
        <div className="Game2Solutions'">
           {this.props.dog.map(dog => <img src={dog.img.image} onClick={dog.oC} alt={""} key={dog.id} className="Game2DogImg"/>)}
        </div>
      </div>

    )
  }
}
