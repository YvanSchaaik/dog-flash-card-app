import React from 'react';
import './App.css';
import DoglistContainer from './components/DoglistContainer'
import './App.css';
import store from './store'
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
// import {DogListContainer} from './component/DogListContainer'
import Navbar from './components/Navbar';
import Home from './components/Home'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import GamesContainer from './components/GamesContainer';



class App extends React.Component {
  render(){
    return (
      <Provider store= {store}>
        <div className="App">
          <Navbar />
          <Route exact path ='/' component={Home}/>
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer}/>
          <Route path="/games" component={GamesContainer}/>

        </div>
      </Provider>
       

    );
  }
}

export default App;
