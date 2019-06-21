import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateName } from '../actions/actions'


export class GameStatsContainer extends Component {
    state = {
        input : ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateName(this.state.input)
    }

    handleChange = (event) => {
        this.setState({input : event.target.value})
        
    }

    render() {
        console.log("name",this.state.name)
        return (
            <div className="nameForm">
            <form onSubmit={this.handleSubmit}>
                <label>
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

export default connect(null, { updateName })(GameStatsContainer)