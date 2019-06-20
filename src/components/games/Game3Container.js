import React, { Component } from 'react'
import { connect } from 'react-redux';
import Game2 from './Game2'
import { addDog, guessBreed, getBreeds, getBreedsAndPickThree } from '../../actions/gameTwoActions'

export class Game2Container extends Component {

  state = {
    score: {
      correct: 0,
      wrong: 0
    },
    breedsPlayed: []
  }


  wrong = () => {
    this.setState({
      score: {
        correct: this.state.score.correct ,
        wrong: this.state.score.wrong + 1
      }
    })
    this.props.getBreedsAndPickThree()
  }
  solution = () => {
    this.setState({
      score: {
        correct: this.state.score.correct + 1 ,
        wrong: this.state.score.wrong 
      }
    })
    this.props.getBreedsAndPickThree()
  }

  componentDidMount = () => {
    this.props.getBreedsAndPickThree()
  }

  render() {
    if (!this.props.gameTwo.solution || !this.props.gameTwo.breeds) return 'Loading...'

    return (
      <p> Hallo!</p>

    )
  }
}

const mapStateToProps = (state) => {
  //console.log("MSTP G2 ", state)
  return {
    gameTwo: state.GameTwo
  }
}

export default connect(mapStateToProps, { addDog, guessBreed, getBreeds, getBreedsAndPickThree })(Game2Container)


