import React from 'react';

import './App.css';
import DoglistContainer from './components/DoglistContainer'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <DoglistContainer/>
        
      </div>
    );
  }
}

export default App;
