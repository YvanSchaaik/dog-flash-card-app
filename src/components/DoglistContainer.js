import React, { Component } from 'react'
import DogsList from './DogList';
import { connect } from 'react-redux';
import {getDogs} from '../actions/actions'

export class DogListContainer extends Component {
    componentDidMount() {
        this.props.getDogs()
    }

    render () {
        return <DogsList />
    }
}

const mapDispatchToProps = { getDogs }

export default connect(null, mapDispatchToProps)(DogListContainer)