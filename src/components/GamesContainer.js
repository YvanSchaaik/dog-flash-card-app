import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GamesContainer extends Component {
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
