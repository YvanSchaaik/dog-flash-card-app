import React, { Component } from 'react'
import './Footer.css'


export default class Footer extends Component {
  year =  new Date().getFullYear();
  
  render() {
    
    return (
      <div className="Footer">
          <p> Yuri van Schaaik, Pedro Abel Diaz, Jeroen Bruinsma</p>
          <p> © { this.year}</p>
      </div>
              )
            }
          }
