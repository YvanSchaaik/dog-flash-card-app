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