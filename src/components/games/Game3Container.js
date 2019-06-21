import React, { Component } from 'react'
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
  

  render() {
    const renderElement = Math.floor((Math.random() * 2))
    const gameArr = [<Game1Container game3active={true} game3Renew={this.reRender} />,<Game2Container game3active={true} game3Renew={this.reRender} />]
    return (

        gameArr[renderElement]
        
    )
  }
}
