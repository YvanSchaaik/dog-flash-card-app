import React, { Component } from 'react'
import './Game1.css'

export default class Game1 extends Component {
  state = {
    addClass: false
  }

  shuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5);
  }

  checkAnswer = (answer) => {
    console.log('Answer is: ', answer )
    
    if(answer === this.props.solution.breed) {
      alert('Correct Answer!') 
      this.props.correct(true)
      console.log('is it working??')

    } else {
      alert(`Wrong Answer, \nThe correct answer was: \n\n${this.props.solution.breed}. \n\nTry Again!`)

      this.props.correct(false)

    }

  }

  render() {
    const options = this.props.options
    this.shuffle(options)

    return (
      <div>
        <h1>This is the Game #1</h1>
        <b>Score</b> Correct: {this.props.score.correct} / wrong: {this.props.score.wrong}
        <div>
        <img className="guessImage" src={this.props.solution.image} alt="Dog Breed to guess"/>
        <h3>Solution: {this.props.solution.breed}</h3>
        <h3>hint: {this.props.hint}</h3>
        <div className="optionsButtons">

        {
          
          options.map( (option, index) => <button onClick={() => this.checkAnswer(option)} key={index}> {option} </button>)
        }

        </div>
       
      </div>
      </div>
      
    )
  }
}

