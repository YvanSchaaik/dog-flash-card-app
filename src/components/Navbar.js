import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
          <ul className="nav">
            <li className="nav-pill"><a href="home">Home</a></li>
            <li className="nav-pill"><a href="breeds">Breeds</a></li>
            <li style={{float:"right"}} className="nav-pill"><a href="#play" >Play</a></li>
            <li className="nav-pill"><a href="info">Info</a></li>
          </ul>
      </div>
              )
            }
          }
