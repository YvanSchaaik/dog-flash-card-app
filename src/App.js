import React from 'react';
import './App.css';
import Navbar from './components/Navbar';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <h1>Hello world</h1>

      </div>
    );
  }
}

export default App;
