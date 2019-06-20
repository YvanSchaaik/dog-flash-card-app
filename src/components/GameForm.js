import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class GameForm extends Component {
    static propTypes = {
        addPlayer : PropTypes.func.isRequired
    }

    state = {
        name : ''
    }

handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPlayer(this.state.name = event.target.value)
    console.log(`Submitting form creates a ${this.state.name}`)
}

handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
    console.log('Value form!',event.target.value)

}

    render() {
        console.log( 'test',this.state.name)
        return (
            <div className="nameForm">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        />
                        
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

