import React, { Component } from 'react'
import './Game2.css'

export default class Game2 extends Component {
state = { active: true }


  render() {
    //console.log("nananana",this.props.dog[0] )
    return (
      <div>
        <h1>This is the Game #2</h1>
        <p> you identified {this.props.score.wrong} wrong, and {this.props.score.correct} right good!       </p>
        <p>Select the picture containing a {this.props.solution.breed} dog</p>
        <div className="Game2Solutions'">
           
           
           
           {this.props.dog.map(dog => <img src={dog.img.image} onClick={dog.oC} alt={""} key={dog.id} className="Game2DogImg"/>)}
            
                    

        </div>
      </div>

    )
  }
}
