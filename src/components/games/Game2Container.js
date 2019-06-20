import React, { Component } from 'react'
import { connect } from 'react-redux';
import Game2 from './Game2'
import { addDog, guessBreed, getBreeds, getBreedsAndPickThree } from '../../actions/gameTwoActions'

export class Game2Container extends Component {

  state = {
      wrong: this.wrong,
      good: this.solution,
  }

  wrong = () => {
    console.log("444")
    this.setState({
      active: !this.state.active
    })
  }
  solution = () => {
    console.log("555")
    this.setState({
      active: !this.state.active
    })
  }

  componentDidMount = () => {
    this.props.getBreedsAndPickThree()
  }

  render() {
    if (!this.props.gameTwo.solution || !this.props.gameTwo.breeds) return 'Loading...'

    return (
      <Game2 solution={this.props.gameTwo.solution} random1Img={this.props.gameTwo.random1} random2Img={this.props.gameTwo.random2} good={this.state.good} wrong={this.state.wrong} />

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


