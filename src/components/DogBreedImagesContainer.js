import React, { Component } from 'react'
import DogBreedImages from './DogBreedImages'
import { connect } from 'react-redux'
import { getTenDogImages } from '../actions/actions'


class DogBreedImagesContainer extends Component {
    componentDidMount() {
        this.props.getTenDogImages(this.props.match.params.breed.toLowerCase())

    }
    render() {
        return <DogBreedImages images={this.props.images} breed={this.props.match.params.breed} />
    }
}

const mapDispatchToProps = { getTenDogImages }

const mapStateToProps = (state) => {
    return {
        images: state.dogImageReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogBreedImagesContainer)