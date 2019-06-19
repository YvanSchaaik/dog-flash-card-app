import React, { Component } from 'react'
import * as request from 'superagent'
import Game1 from './Game1'

export default class Game1Container extends Component {
  state = {};

  componentDidMount = () => {
    request('https://dog.ceo/api/breed/hound/images')
      .then(response => {
        console.log('image', response.body.message[0])
        this.setState({
        load: true,
        gameImage: response.body.message[0]
      })})
      
  }
  render() {
    if (!this.state.load) return 'Loading...'
    return <Game1 image={this.state.gameImage}/>

  }
}
