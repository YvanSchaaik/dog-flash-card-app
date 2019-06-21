import React, { Component } from 'react'
import { connect } from 'react-redux';
import Game1 from './Game1'
import { addDog, guessBreed, getBreeds, getBreedsAndPickOne, updateScore } from '../../actions/gameOneActions'
import {getPercentage} from '../../actions/actions'


export class Game1Container extends Component {

  nextQuestion(answer_status){
    if(answer_status) {
      console.log('I am in correct answer')

      this.props.updateScore({
        correct: this.props.userStats.score.correct + 1,
        wrong: this.props.userStats.score.wrong
      })

    } 
    
    if(!answer_status) {
      console.log('I am in INCORRECT answer')

      this.props.updateScore({
        correct: this.props.userStats.score.correct,
        wrong: this.props.userStats.score.wrong + 1
      })
    }
    //added by Jeroen (begin)
    //console.log("G1 props" ,) 
    if (this.props.game3active === true) {
      this.props.game3Renew()
    } else {
      this.props.getBreedsAndPickOne()
    }
    //added by Jeroen (end)
    
  }

  getOptions = () => {
    const sol_breed = this.props.gameOne.solution.breed

    //Breeds filter the array without the sol breed to avoid duplications
    const breeds = this.props.gameOne.breeds.filter(breed => breed !== sol_breed)
  
    const random_num = Math.floor(Math.random() * breeds.length )
    const random_num2 = Math.floor(Math.random() * breeds.length )

    const options = [ sol_breed, breeds[random_num], breeds[random_num2]]

    console.log('Options', options)

    return options
  }

  componentDidMount = () => {
    this.props.getBreedsAndPickOne()
    this.props.updateScore(this.props.userStats.score)
 
    
  }

  render() {
    console.log('forceUpdate works????')

    if (!this.props.gameOne.solution || !this.props.gameOne.breeds) return 'Loading...'

    const options = this.getOptions()
  
    const accuracy = this.props.userStats.accuracy

  
    return (
      <Game1 solution={ this.props.gameOne.solution } options = { options } correct={ (answer_status) => this.nextQuestion(answer_status)} score={this.props.userStats.score} hint={this.props.gameOne.solution.breed[0]} />
    )
  }


}

const mapStateToProps = (state) => {
  return {
    gameOne: state.GameOne,
    userStats: state.userStats
  }
}

export default connect(mapStateToProps, { addDog, guessBreed, getBreeds, getBreedsAndPickOne, updateScore, getPercentage })(Game1Container)