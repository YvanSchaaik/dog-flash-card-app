import React, { Component } from 'react'
import './Game2.css'
import { connect } from 'react-redux';
import { getPercentage } from '../../actions/actions'

 class Game2 extends Component {
state = { active: true }


render() {
  return (
    <div>
      <h1>This is the Game #2</h1>
        <b>Score</b> Correct: {this.props.score.correct} / Wrong: {this.props.score.wrong}
        <p>Select the picture containing a< strong> {this.props.solution.breed} </strong> dog </p>

        <p><b>Accuracy: { !this.props.userStats.accuracy ? 0 : this.props.userStats.accuracy } %</b></p>

      <div className="Game2Solutions'">
         {this.props.dog.map(dog => <img src={dog.img.image} onClick={dog.oC} alt={""} key={dog.id} className="Game2DogImg"/>)}
      </div>
    </div>
  )
}
}

export const mapStateToProps = (state) => {
  return {
    userStats: state.userStats
  }
}


export default connect(mapStateToProps, { getPercentage })(Game2)