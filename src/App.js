import React from 'react';
import './App.css';
import store from './store'
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Navbar from './components/Navbar';
import Home from './components/Home'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'

import GamesContainer from './components/GamesContainer';
import Game1Container from './components/games/Game1Container';
import DogListContainer from './components/DoglistContainer';
import Info from './components/Info';




class App extends React.Component {
  render(){
    return (
      <Provider store= {store}>
        <div className="App">
          <Navbar />
          
          <Route exact path ='/' component={Home}/>
          <Route path="dog-list" component={DogListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer}/>
          <Route path="/info" component={Info} />
          <Route exact path ='/breeds' component={DogListContainer}/>
          <Route path="/games" component={GamesContainer}/>
          <Route path="/game1" component={Game1Container}/>


       
        </div>
      </Provider>
       

    );
  }
}

export default App;
