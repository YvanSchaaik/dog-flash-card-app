import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateScore } from '../actions/actions'

export class GamesContainer extends Component {
  componentDidMount(){
    this.props.updateScore({
      correct: 0,
      wrong: 0
    })
  }
  
  render() {
    return (
      <div>
               
          <h1> <Link to="/game1">Game #1 </Link></h1>
          <h1> <Link to="/game2">Game #2 </Link></h1>
          <h1> <Link to="/game3">Game #3 </Link></h1>

      </div>
    )
  }
}

export default connect(null, {updateScore})(GamesContainer)