import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as request from 'superagent'
import Game1 from './Game1'
import { addDog, setDogs } from '../../actions/gameOneActions'

export class Game1Container extends Component {
  state = {};

  componentDidMount = () => {
    request('https://dog.ceo/api/breed/hound/images')
      .then(response => {
        console.log('image', response.body.message[0])
        this.setState({
        load: true,
        gameImage: response.body.message[0]
      })})

      this.props.addDog('pedro', 'action')
      this.props.addDog('Maria', 'otra')
      this.props.setDogs()
  }

  render() {
    if (!this.state.load) return 'Loading...'
    return <Game1 image={ this.state.gameImage }/>

  }
}

const mapStateToProps = (state) => {
  return {
    ImageToGuess: state.GameOne
  }
}

export default connect(null, { addDog, setDogs })(Game1Container)