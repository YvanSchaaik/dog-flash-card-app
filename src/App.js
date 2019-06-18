import React from 'react';
import './App.css';
import store from './store'
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import Navbar from './components/Navbar';
import DogListContainer from './components/DoglistContainer';



class App extends React.Component {
  render(){
    return (
 
        
      <Provider store= {store}>
        <div className="App">
          <Navbar />
          <h1>THISISATEST</h1>
          <Route exact path ='/dog-breed' />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/doglist" component={DogListContainer} />
          <Route exact path="/dog-images" component={DogImagesContainer} />
        </div>
      </Provider>
       

    );
  }
}

export default App;
