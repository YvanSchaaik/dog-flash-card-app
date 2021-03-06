import React, { Component } from 'react'
import './Home.css'
import GameStatsContainer from './GameStatsContainer'

export class Home extends Component {
    render() {
        return (
            <div className='homeContainer'>
                <GameStatsContainer />
                <h1>HomePage</h1>
                <div className='homeMain'>
                    <div className="homeIntro">
                        <p>Welcome to our webpage where you can find everything about all the dog breeds. This amazing site is made using react-redux by Dogteam-YPJ from Codaisseur.
                           Let us know if you find something that doesn't look right </p>
                        <h2>Game!</h2>
                        <h3>Do you know all the dog breeds?</h3>
                        <p>So please and come play our game and learn everything about the breeds!</p>
                        <h2>Github</h2>
                        <p> Do you want to know how we made this amazing app?</p>
                        <p><a href="https://github.com/YvanSchaaik/dog-flash-card-app/" target="blank">  Please click here to go to our Github </a> </p>
                    </div>
                    <div className='homeImg'>
                        <img alt='cuteDog' src="https://images.dog.ceo/breeds/mountain-bernese/n02107683_333.jpg" >
                        </img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
