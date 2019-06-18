import React from 'react';
import './App.css';
import store from './store'
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {DogListContainer} from './component/DogListContainer'


class App extends React.Component {
  render(){
    return (
      <Provider store= {store}>
        <div className="App">
          <h1>THISISATEST</h1>
          <Route exact path ='/dog-breed' component={DogListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
