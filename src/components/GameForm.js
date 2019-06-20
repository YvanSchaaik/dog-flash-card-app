import React, { Component } from 'react'

export class GameForm extends Component {
    state = {}

handleSubmit = (event) => {

}

handleChange = (event) => {

}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input type="text" onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        )
    }
}

