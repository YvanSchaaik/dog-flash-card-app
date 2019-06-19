import React, { Component } from 'react'
import { connect } from 'react-redux';
import Game1 from './Game1'
import { addDog, guessBreed } from '../../actions/gameOneActions'

export class Game1Container extends Component {

  componentDidMount = () => {
    const breed = 'hound'
    this.props.guessBreed(breed)
  }

  render() {
    if (!this.props.gameOne) return 'Loading...'
    console.log('CALLING STATE', this.props.ImageToGuess) 
    return <Game1 solution={ this.props.gameOne } />
   
  }
}

const mapStateToProps = (state) => {
  return {
    gameOne: state.GameOne
  }
}

export default connect(mapStateToProps, { addDog, guessBreed })(Game1Container)