import React, { Component } from 'react'

export class GameForm extends Component {
    state = {}

handleSubmit = (event) => {
    event.preventDefault()
    console.log('SUBMITTRIGGERED!')
}

handleChange = (event) => {
    console.log('Value form!',event.target.value)

}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input type="text" name="title" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

