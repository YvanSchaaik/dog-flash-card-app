import React, { Component } from 'react'
import { connect } from 'react-redux';
import Game1 from './Game1'
import { addDog, guessBreed, getBreeds, getBreedsAndPickOne } from '../../actions/gameOneActions'

export class Game1Container extends Component {
  state = {
    score: {
      correct: 0,
      wrong: 0
    },
    breedsPlayed: []
  }

  nextQuestion(answer_status){
    if(answer_status) {
      this.setState({score: {
        correct: this.state.score.correct + 1,
        wrong: this.state.score.wrong
      }}) 
    } 
    
    if(!answer_status) {
      this.setState({score: {
        correct: this.state.score.correct,
        wrong: this.state.score.wrong + 1
      }}) 
    }
    
    this.props.getBreedsAndPickOne()
  }

  componentDidMount = () => {
    this.props.getBreedsAndPickOne()
  }

  getOptions = () => {
    const sol_breed = this.props.gameOne.solution.breed

    //Breeds filter the array without the sol breed to avoid duplications
    const breeds = this.props.gameOne.breeds.filter(breed => breed !== sol_breed)
  
    const random_num = Math.floor(Math.random() * breeds.length )
    const random_num2 = Math.floor(Math.random() * breeds.length )

    let options = [ sol_breed, breeds[random_num], breeds[random_num2]]

    if(!this.state.breedsPlayed.includes(sol_breed)){
      this.setState({breedsPlayed: this.state.breedsPlayed.concat(sol_breed)})

      options.splice(-1,1)

      return options
    } 

    return options
  }

  render() {
    if (!this.props.gameOne.solution || !this.props.gameOne.breeds) return 'Loading...'

    const options = this.getOptions()
    console.log('TESTING', options)


    return (
      <Game1 solution={ this.props.gameOne.solution } options = { options } correct={ (answer_status) => this.nextQuestion(answer_status)} score={this.state.score}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameOne: state.GameOne
  }
}

export default connect(mapStateToProps, { addDog, guessBreed, getBreeds, getBreedsAndPickOne })(Game1Container)