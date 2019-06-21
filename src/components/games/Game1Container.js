import React, { Component } from 'react'
import { connect } from 'react-redux';
import Game1 from './Game1'
import { addDog, guessBreed, getBreeds, getBreedsAndPickOne, updateScore } from '../../actions/gameOneActions'


export class Game1Container extends Component {

  state = {
    score: {
      correct: 0,
      wrong: 0
    }
  }

  nextQuestion(answer_status){
    if(answer_status) {
      console.log('I am in correct answer')

      this.setState({score: {
        correct: this.state.score.correct + 1,
        wrong: this.state.score.wrong
      }}) 
    } 
    
    if(!answer_status) {
      console.log('I am in INCORRECT answer')

      this.setState({score: {
        correct: this.state.score.correct,
        wrong: this.state.score.wrong + 1
      }}) 
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

  componentDidMount = () => {
    this.props.getBreedsAndPickOne()
    this.props.updateScore({
      correct: 2,
      wrong: 8
    })
    

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

  render() {
    console.log('forceUpdate works????')

    if (!this.props.gameOne.solution || !this.props.gameOne.breeds) return 'Loading...'

    const options = this.getOptions()

    return (
      <Game1 solution={ this.props.gameOne.solution } options = { options } correct={ (answer_status) => this.nextQuestion(answer_status)} score={this.state.score} hint={this.props.gameOne.solution.breed[0]} accuracy="288" />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameOne: state.GameOne
  }
}

export default connect(mapStateToProps, { addDog, guessBreed, getBreeds, getBreedsAndPickOne, updateScore })(Game1Container)