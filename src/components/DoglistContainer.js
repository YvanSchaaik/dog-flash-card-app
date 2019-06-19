import React, { Component } from 'react'
import DogsList from './DogList';
import { connect } from 'react-redux';
import {getDogs} from '../actions/actions'

export class DogListContainer extends Component {
    componentDidMount() {
        this.props.getDogs()
    }

    render () {
        return <DogsList dogBreeds={this.props.dog.dogs}/>
    }
}

const mapDispatchToProps = { getDogs }

const mapStateToProps = (state) => {
    console.log('state?', state)
    return {
        dog: state.dogListReducer
    } 
 }

export default connect(mapStateToProps, mapDispatchToProps)(DogListContainer)