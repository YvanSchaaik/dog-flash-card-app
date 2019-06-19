import React, { Component } from 'react'
import { connect } from 'react-redux';
import Game1 from './Game1'
import { addDog, guessBreed, getBreeds, getBreedsAndPickOne } from '../../actions/gameOneActions'

export class Game1Container extends Component {

  componentDidMount = () => {
    this.props.getBreedsAndPickOne()
  }

  render() {
    if (!this.props.gameOne.solution || !this.props.gameOne.breeds) return 'Loading...'

    const breed = this.props.gameOne.solution.breed
    const breeds = this.props.gameOne.breeds
    const random_num = Math.floor(Math.random() * breeds.length )

    const options = [ breed, breeds[random_num], breeds[random_num]]

    console.log('Options', options)
    return (
      <Game1 solution={ this.props.gameOne.solution } />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameOne: state.GameOne
  }
}

export default connect(mapStateToProps, { addDog, guessBreed, getBreeds, getBreedsAndPickOne })(Game1Container)