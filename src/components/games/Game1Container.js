import React, { Component } from 'react'
import { connect } from 'react-redux';
import Game1 from './Game1'
import { addDog, guessBreed, getBreeds, getBreedsAndPickOne } from '../../actions/gameOneActions'

export class Game1Container extends Component {

  state = {
    score: 0
  }

  nextQuestion(){
    this.setState({score: this.state.score + 1})
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

    const options = [ sol_breed, breeds[random_num], breeds[random_num2]]

    console.log('Options', options)

    return options
  }

  render() {
    console.log('forceUpdate works????')

    if (!this.props.gameOne.solution || !this.props.gameOne.breeds) return 'Loading...'

    const options = this.getOptions()

    return (
      <Game1 solution={ this.props.gameOne.solution } options = { options } correct={ () => this.nextQuestion()} score={this.state.score}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameOne: state.GameOne
  }
}

export default connect(mapStateToProps, { addDog, guessBreed, getBreeds, getBreedsAndPickOne })(Game1Container)