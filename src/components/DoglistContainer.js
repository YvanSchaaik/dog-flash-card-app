import React, { Component } from 'react'
import DogsList from './DogList';
import {connect} from 'react-redux'


class DogListContainer extends Component {

    state = {
    dogBreeds: null,
    }



render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />
    // this line should be changet to show data from the props
}

}

const mapStateToProps = (reduxState) => {
    console.log("mapState called ")
    return {
        breeds: reduxState.breeds
    }
  }
  
  export default connect(mapStateToProps, null)(DogListContainer)