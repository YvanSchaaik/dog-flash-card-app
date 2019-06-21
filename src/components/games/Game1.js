import React, { Component } from 'react'
import './Game1.css'
import { connect } from 'react-redux';
import { userStats } from '../../reducers/userStats'
import { getPercentage } from '../../actions/actions'


class Game1 extends Component {
  state = {
    addClass: false
  }

  shuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5);
  }


  checkAnswer = (answer) => {   

    if(answer === this.props.solution.breed) {
      alert('Correct Answer!') 
      this.props.correct(true)
      console.log('is it working??')

    } else {
      alert(`Wrong Answer, \nThe correct answer was: \n\n${this.props.solution.breed}. \n\nTry Again!`)

      this.props.correct(false)

    }

  }

  componentDidMount() {


  }



  render() {
    const options = this.props.options
    this.shuffle(options)

    const pointer = this.props.userStats;

    
    console.log('Game1 checing Accuracy', this.props.userStats.accuracy)

    return (
      <div>
        <b>Score</b> Correct: {this.props.score.correct} / wrong: {this.props.score.wrong}

        <p><b>Accuracy:{' '}  
        { !this.props.userStats.accuracy ? 0 : this.props.userStats.accuracy } %</b></p>

        <div>
        <img className="guessImage" src={this.props.solution.image} alt="Dog Breed to guess"/>
        
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

export const mapStateToProps = (state) => {
  return {
    userStats: state.userStats
  }
}

export default connect(mapStateToProps, { getPercentage })(Game1)