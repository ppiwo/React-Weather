import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import CurrentWeather from './components/CurrentWeather';
import WeatherCard from './components/WeatherCard';
// import backgroundImage from '../public/backgrounds/rain_background.jpg'

class App extends Component {
  state = {
    weatherInfo: [
      {
        id: 1,
        weather: 'sunny',
        high: 60,
        low: 40,
        current: 50,
        day: 'Monday'
      },
      {
        id: 2,
        weather: 'rain',
        high: 70,
        low: 50,
        current: 60,
        day: 'Tuesday'
      },
      {
        id: 1,
        weather: 'cloudy',
        high: 80,
        low: 60,
        current: 70,
        day: 'Wednesday'
      },
      {
        id: 1,
        weather: 'cloudy',
        high: 80,
        low: 60,
        current: 70,
        day: 'Thursday'
      },
      {
        id: 1,
        weather: 'cloudy',
        high: 80,
        low: 60,
        current: 70,
        day: 'Friday'
      },
      {
        id: 1,
        weather: 'cloudy',
        high: 80,
        low: 60,
        current: 70,
        day: 'Saturday'
      },
      {
        id: 1,
        weather: 'cloudy',
        high: 80,
        low: 60,
        current: 70,
        day: 'Sunday'
      }

    ]
  }

  render(){
  return (
    <div className="App">
        <Header />
        <CurrentWeather weather={this.state} />
        <div className="weatherCardContainer">
          <WeatherCard
            style={weatherCardStyle} 
            day={this.state.weatherInfo[1].day} 
            weather={this.state.weatherInfo[1].weather} 
            high={this.state.weatherInfo[1].high} 
            low={this.state.weatherInfo[1].low}
          />
          <WeatherCard 
            style={weatherCardStyle} 
            day={this.state.weatherInfo[2].day} 
            weather={this.state.weatherInfo[2].weather} 
            high={this.state.weatherInfo[2].high} 
            low={this.state.weatherInfo[2].low}
          />
          <WeatherCard
            style={{display: 'inline-block'}} 
            day={this.state.weatherInfo[3].day} 
            weather={this.state.weatherInfo[3].weather} 
            high={this.state.weatherInfo[3].high} 
            low={this.state.weatherInfo[3].low}
          />
          <WeatherCard 
            style={weatherCardStyle}  
            day={this.state.weatherInfo[4].day} 
            weather={this.state.weatherInfo[4].weather} 
            high={this.state.weatherInfo[4].high} 
            low={this.state.weatherInfo[4].low}
          />
          <WeatherCard 
            style={weatherCardStyle}  
            day={this.state.weatherInfo[5].day} 
            weather={this.state.weatherInfo[5].weather} 
            high={this.state.weatherInfo[5].high} 
            low={this.state.weatherInfo[5].low}
          />
          <WeatherCard 
            style={weatherCardStyle}  
            day={this.state.weatherInfo[6].day} 
            weather={this.state.weatherInfo[6].weather} 
            high={this.state.weatherInfo[6].high} 
            low={this.state.weatherInfo[6].low}
          />
        </div>
    </div>
  );
}
}
const weatherCardStyle = {
  background: 'lightblue'
}

export default App;
