import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class GamesContainer extends Component {
  render() {
    return (
      <div>
               
          <h1> <Link to="/game1">Game #1 </Link></h1>
          <h1> Game #2 </h1>
          <h1> Game #3 </h1>

      </div>
    )
  }
}
