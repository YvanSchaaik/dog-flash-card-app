import React, { Component } from 'react'
import { connect } from 'react-redux';

import { addDog, guessBreed, getBreeds, getBreedsAndPickThree } from '../../actions/gameTwoActions'

import Game1Container from './Game1Container'
import Game2Container from './Game2Container'


 export default class Game3Container extends Component {

  state = {
    score: {
      correct: 0,
      wrong: 0
    },
    breedsPlayed: [],
    gamesPlayed: 0
  }


  reRender = () => {
    this.setState({
      gamesPlayed: this.gamesPlayed + 1}  
    )
  }

  componentDidMount = () => {
    //this.props.getBreedsAndPickThree()
  }

  render() {
    //if (!this.props.gameTwo.solution || !this.props.gameTwo.breeds) return 'Loading...'
    const renderElement = Math.floor((Math.random() * 2))
    const gameArr = [<Game1Container game3active={true} game3Renew={this.reRender} />,<Game2Container game3active={true} game3Renew={this.reRender} />]
    return (

        gameArr[renderElement]
        
    )
  }
}

// const mapStateToProps = (state) => {
//   //console.log("MSTP G2 ", state)
//   return {
//     gameTwo: state.GameTwo
//   }
// }

//export default connect(mapStateToProps, { addDog, guessBreed, getBreeds, getBreedsAndPickThree })(Game2Container)


