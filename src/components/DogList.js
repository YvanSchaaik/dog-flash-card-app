import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './DogList.css'


export default class DogsList extends Component {
  render() {
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        {
          this.props.dogBreeds && this.props.dogBreeds.map((breed) =>{
            return <li className='listNames' key={breed}>
            <Link to={`/${breed}`}>{breed}</Link>
            </li>
          })
        }

        {this.props.dogBreeds && 'Loading...'}
      </div>
    )
  }
}