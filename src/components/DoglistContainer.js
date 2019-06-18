import React, { Component } from 'react'
import request from 'superagent'
import DogsList from './DogList';


export default class DogListContainer extends Component {

    state = {
    dogBreeds: null,
    }



componentDidMount() {
    request
        .get('https://dog.ceo/api/breeds/list/all')
        .then(response => response.body.message)
        .then(resp => Object.keys(resp))
        .then(data => this.updateBreeds(data))
        .catch(console.error)
}
updateBreeds = (data) => {

    this.setState({
        dogBreeds: data
    })
}

render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />

}

}