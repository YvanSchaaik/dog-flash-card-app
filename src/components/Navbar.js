import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Breeds</a></li>
            <li style={{float:"right"}}><a href="#" >Play</a></li>
            <li><a href="">Info</a></li>
          </ul>
      </div>
              )
            }
          }
