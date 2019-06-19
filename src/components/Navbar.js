import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
          <ul className="Nav">
            <li className="Nav-pill"><Link to="/">Home</Link></li>
            <li className="Nav-pill"><a href="breeds">Breeds</a></li>
            <li style={{float:"right"}} className="Nav-pill"><Link to="/games" >Play</Link></li>
            <li className="Nav-pill"><Link to='/info'>Info</Link></li>
          </ul>
      </div>
              )
            }
          }
