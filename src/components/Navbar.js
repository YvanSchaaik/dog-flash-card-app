import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
          <ul className="Nav">
            <li className="Nav-pill"><a href="#home">Home</a></li>
            <li className="Nav-pill"><a href="#breeds">Breeds</a></li>
            <li style={{float:"right"}} className="Nav-pill"><a href="#play" >Play</a></li>
            <li className="Nav-pill"><a href="#info">Info</a></li>
          </ul>
      </div>
              )
            }
          }
