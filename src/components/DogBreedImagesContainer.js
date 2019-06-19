import React, { Component } from 'react'
import DogBreedImages from './DogBreedImages'
import request from 'superagent'
import {connect} from 'react-redux'
import {getDogImages} from '../actions/actions'

class DogBreedImagesContainer extends Component {
    state = { images: null }

      componentDidMount() {
            console.log("coponent dit mount DBIC")
            this.props.getDogImages()
        }

   
    render() {
        console.log("render DBIC",this.props.images.dogs)
        return <DogBreedImages images={this.state.images} breed={this.props.match.params.breed} />
    }
}
const mapDispatchToProps = { getDogImages }

const mapStateToProps = (state) => {
    console.log('state?', state)
    return {
        images: state.DogListReducer
    } 
 }




export default connect(mapStateToProps, mapDispatchToProps)(DogBreedImagesContainer)