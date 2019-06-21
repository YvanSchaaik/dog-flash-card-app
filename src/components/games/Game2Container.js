import React, { Component } from 'react'
import { connect } from 'react-redux';
import Game2 from './Game2'
import {  getBreedsAndPickThree } from '../../actions/gameTwoActions'
import { updateScore } from '../../actions/gameOneActions'
import {getPercentage} from '../../actions/actions'

export class Game2Container extends Component {

  state = {
    score: {
      correct: 0,
      wrong: 0
    },
    breedsPlayed: []
  }

 
  wrong = () => {

    console.log("wrong",this.props.userStats)
    
    const incorrect = {
      correct: this.props.userStats.score.correct,
      wrong: this.props.userStats.score.wrong + 1
    }//

    this.props.updateScore(incorrect)

    this.props.getPercentage(incorrect)



    
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

    const correct = {
      correct: this.props.userStats.score.correct + 1,
      wrong: this.props.userStats.score.wrong
    }

    this.props.updateScore(correct)

    this.props.getPercentage(correct)

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
    console.log ("score " , this.props.getPercentage({ correct: 5, wrong: 2  }))
  }

  render() {
    
    if (  !this.props.gameTwo.solution || 
          !this.props.gameTwo.random1  || 
          !this.props.gameTwo.random2 ||
          !this.state.score) {
            return 'Loading...'
          }
       

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
    gameTwo: state.GameTwo,
    userStats: state.userStats


  }
}

export default connect(mapStateToProps, { getBreedsAndPickThree ,updateScore, getPercentage })(Game2Container)
//export default connect(mapStateToProps, { addDog, guessBreed, getBreeds, getBreedsAndPickOne,  })(Game1Container)

