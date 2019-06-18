import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
          <ul class="nav">
            <li class="nav-pill"><a href="#">Home</a></li>
            <li class="nav-pill"><a href="#">Breeds</a></li>
            <li style={{float:"right"}} class="nav-pill"><a href="#" >Play</a></li>
            <li class="nav-pill"><a href="#">Info</a></li>
          </ul>
      </div>
              )
            }
          }
