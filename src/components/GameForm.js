import React, { Component } from 'react'

export default class GameForm extends Component {
    
    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
            </div>
        )
    }
}

