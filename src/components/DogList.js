import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './DogList.css'


export default class DogsList extends Component {
  render() {
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        {
          this.props.dogBreeds && this.props.dogBreeds.map((breed) => {
            return <div className="dogListItem" key={breed+"4"}>
              

                <img src="icon.png" className="dogListItemIcon" alt=" "  />
              
              <Link to={`dog-breeds/${breed}`}>{breed}</Link>

            </div>
          })
        }

        {!this.props.dogBreeds && 'Loading...'}
      </div>
    )
  }
}