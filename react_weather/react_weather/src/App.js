import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import CurrentWeather from './components/CurrentWeather';

class App extends Component {
  state = {
    weatherInfo: [
      {
        id: 1,
        weather: 'sunny',
        high: 60,
        low: 40,
        current: 50
      }
    ]
  }

  render(){
  return (
    <div className="App">
        <Header />
        <CurrentWeather weather={this.state} />
    </div>
  );
}
}

export default App;
