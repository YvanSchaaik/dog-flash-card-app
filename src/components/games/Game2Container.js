import React, { Component } from 'react'
import { connect } from 'react-redux';
import Game2 from './Game2'
import {  getBreedsAndPickThree } from '../../actions/gameTwoActions'

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
        correct: this.state.score.correct,
        wrong: this.state.score.wrong + 1
      }
    })
    
    if (this.props.game3active === true) {
      this.props.game3Renew()
    } else {
      this.props.getBreedsAndPickThree()
    }
  }
  solution = () => {
    this.setState({
      score: {
        correct: this.state.score.correct + 1,
        wrong: this.state.score.wrong
      }
    })
    if (this.props.game3active === true) {
      this.props.game3Renew()
    } else {
      this.props.getBreedsAndPickThree()
    }
  }

  componentDidMount = () => {
    this.props.getBreedsAndPickThree()
  }

  render() {
    if (!this.props.gameTwo.solution || !this.props.gameTwo.breeds) return 'Loading...'

    const dogCards = [

      {
        id: 0,
        img: this.props.gameTwo.solution,
        oC: this.solution,
      },
      {
        id: 1,
        img: this.props.gameTwo.random1,
        oC: this.wrong
      },
      {
        id: 2,
        img: this.props.gameTwo.random2,
        oC: this.wrong
      }
    ]



   shakeArr(dogCards)
  

    return (
      <Game2 dog={dogCards} score={this.state.score} solution={this.props.gameTwo.solution} />
    )
  }
}
function shakeArr(arr) {
  let index = arr.length
  let temporaryValue
  let randomIndex;
  while (0 !== index) {
    randomIndex = Math.floor(Math.random() * index);
    index -= 1;

    temporaryValue = arr[index];
    arr[index] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}

const mapStateToProps = (state) => {
  return {
    gameTwo: state.GameTwo
  }
}

export default connect(mapStateToProps, { getBreedsAndPickThree })(Game2Container)


