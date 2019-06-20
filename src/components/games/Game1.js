import React, { Component } from 'react'
import './Game1.css'

export default class Game1 extends Component {

  checkAnswer = (answer) => {
    console.log('Answer is: ', answer )
    
    if(answer === this.props.solution.breed) {
      alert('Correct Answer!') 
      console.log('When is this happening??')
      //Add +1 in the score
      this.props.correct(true)
      // dispatch an action to change the state of the component.
    } else {
      alert('Wrong Answer, Try Again!')
      this.props.correct(false)

    }

  }

  render() {
    return (
      <div>
        <h1>This is the Game #1</h1>
        <b>Score</b> Correct: {this.props.score.correct} / wrong: {this.props.score.wrong}
        <div>
        <img className="guessImage" src={this.props.solution.image} alt="Dog Breed to guess"/>
        <h3>Solution: {this.props.solution.breed}</h3>
        <div className="optionsButtons">

        {
          this.props.options.map( (option, index) => <button onClick={() => this.checkAnswer(option)} key={index}> {option} </button>)
        }

        </div>
       
      </div>
      </div>
      
    )
  }
}

