import React, { Component } from 'react'
import GameForm from './GameForm';

export default class GameStatsContainer extends Component {
    state = {
        input : '',
        name : ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            name: this.state.input,
            input: ''
        })

    }

    handleChange = (event) => {
        this.setState({input : event.target.value})   
    }
    render() {
        return (
            <div>
            <GameForm
            value={this.state.input}
            name={this.state.name}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            />
            <button type='submit' onClick={this.props.handleSubmit}>Submit</button>
            </div>
        )
    }
}
