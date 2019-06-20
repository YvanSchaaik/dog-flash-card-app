import React, { Component } from 'react'

export default class GameForm extends Component {
    
    render() {
        return (
            <div className="nameForm">
            <form onSubmit={this.props.handleSubmit}>
                <label>
                <p>Name: {this.props.name}</p>
                <input
                type="text"
                name="name"
                onChange={this.props.handleChange}
                value={this.props.input}
                />
                </label>
                <button type='submit' onClick={this.props.handleSubmit}>Submit</button>
            </form>
            </div>
        )
    }
}

