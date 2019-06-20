import React, { Component } from 'react'

export default class GameForm extends Component {
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
            <div className="nameForm">
            <form onSubmit={this.handleSubmit}>
                <label>
                <p>Name: {this.state.name}</p>
                <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.input}
                />
                </label>
                <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </form>
            </div>
        )
    }
}

