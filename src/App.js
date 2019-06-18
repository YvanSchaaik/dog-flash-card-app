import React from 'react';
import './App.css';
import DoglistContainer from './components/DoglistContainer'
import './App.css';
import store from './store'
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Navbar from './components/Navbar';
import Home from './components/Home'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'



class App extends React.Component {
  render(){
    return (
      <Provider store= {store}>
        <div className="App">
          <Navbar />
          <Route exact path ='/' component={Home}/>
          <Route exact path ='/home' component={Home}/>
          <Route exact path ='/breeds' component={DoglistContainer}/>
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer}/>
          
        
        </div>
      </Provider>
       

    );
  }
}

export default App;
