import React from 'react'
import { Link } from 'react-router-dom'
import './DogBreedImages.css'


export default function DogBreedImages(props) {
    const {images} = props
    return (
        <div className="dog-breed-images">
            <h1>Dog Breed images</h1>
            This page will show images of the {props.breed}  breed.
            <div className="DogBreedImgContainer">

                {images && images.map(url => <div className="DogBreedImg"><img src={url} alt="Dog"  key={url} /></div>)}
                {!images && 'Loading...'}
            </div>
            <Link to="/"> Go back to index </Link>
        </div>
    )
}


