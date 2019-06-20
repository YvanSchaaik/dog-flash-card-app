import React, { Component } from 'react'
import { GameForm } from './GameForm';

export class GameStats extends Component {

    addPlayer = (name) => {
        this.setState({
          players: this.state.name.concat(name)
        })
      }
      
    render() {
        return (
            <div>
            <h1>dummydata</h1>
            <p>Name: {this.props.name}</p>
            <p>Score: </p>
            <p>Percentage: </p>
            <GameForm addPlayer={this.addPlayer}/>
            </div>
        )
    }
}

export default GameStats

