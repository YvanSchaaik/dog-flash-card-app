import React from 'react';
import './App.css';
import store from './store'
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Navbar from './components/Navbar';
import Home from './components/Home'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'

import GamesContainer from './components/GamesContainer';
import Game1 from './components/games/Game1';
import DogListContainer from './components/DoglistContainer';
import Info from './components/Info';

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Route exact path ='/' component={Home}/>
          <Route path="/dog-image/:breed" component={DogBreedImagesContainer}/>
          <Route path="/info" component={Info} />
          <Route path ='/breeds' component={DogListContainer}/>
          <Route path="/games" component={GamesContainer}/>
          <Route path="/game1" component={Game1}/>
        </div>
      </Provider>
    );
  }
}

export default App;