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



class App extends React.Component {
  render(){
    return (
      <Provider store= {store}>
        <div className="App">
          <h1>THISISATEST</h1>
          <Route exact path ='/' component={Home}/>
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer}/>
          <Navbar />
          <DoglistContainer/>
        </div>
      </Provider>
       

    );
  }
}

export default App;
