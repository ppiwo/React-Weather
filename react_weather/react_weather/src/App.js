import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import CurrentWeather from './components/CurrentWeather';
import {WeatherCard, dayAbbreviation, dayFull} from './components/WeatherCard';
import SearchBar from './components/SearchBar';
// import backgroundImage from '../public/backgrounds/rain_background.jpg'

import axios from 'axios';

class App extends Component {
  state = {
    weatherInfo: 
    [],
    currentWeatherInfo:
    [],
    location: []
  }

  componentDidMount(){
    this.loadData();
  }

  loadData() {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=41.8781&lon=-87.6298&units=imperial&exclude=minutely,hourly,daily&appid=886705b4c1182eb1c69f28eb8c520e20')
  .then(res => this.setState({currentWeatherInfo: res.data}))

  axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=41.8781&lon=-87.6298&units=imperial&exclude=minutely,hourly,current&appid=886705b4c1182eb1c69f28eb8c520e20')
  .then(res => this.setState({weatherInfo: res.data}))
  }

  render(){
    if (this.state.weatherInfo.daily === undefined || this.state.currentWeatherInfo.current.dt === undefined){
      return <div />
    }
  
  return (
    <div className="App">
      <SearchBar />
      <div className="todayContainer">
        <CurrentWeather 
       day={dayFull(this.state.currentWeatherInfo.current.dt)} 
       weather={this.state.currentWeatherInfo.current.weather[0].main} 
      //  high={} 
      //  low={}
       currentTemp={this.state.currentWeatherInfo.current.temp}

         />
         </div>
          <WeatherCard 
            style={weatherCardStyle}  
            day={dayAbbreviation(this.state.weatherInfo.daily[1].dt)} 
            weather={this.state.weatherInfo.daily[1].weather[0].main} 
            high={this.state.weatherInfo.daily[1].temp.max} 
            low={this.state.weatherInfo.daily[1].temp.min}
          />
          <WeatherCard 
            style={weatherCardStyle}  
            day={dayAbbreviation(this.state.weatherInfo.daily[2].dt)} 
            weather={this.state.weatherInfo.daily[2].weather[0].main} 
            high={this.state.weatherInfo.daily[2].temp.max} 
            low={this.state.weatherInfo.daily[2].temp.min}
          />
          <WeatherCard 
            style={weatherCardStyle}  
            day={dayAbbreviation(this.state.weatherInfo.daily[3].dt)} 
            weather={this.state.weatherInfo.daily[3].weather[0].main} 
            high={this.state.weatherInfo.daily[3].temp.max} 
            low={this.state.weatherInfo.daily[3].temp.min}
          />
          <WeatherCard 
            style={weatherCardStyle}  
            day={dayAbbreviation(this.state.weatherInfo.daily[4].dt)} 
            weather={this.state.weatherInfo.daily[4].weather[0].main} 
            high={this.state.weatherInfo.daily[4].temp.max} 
            low={this.state.weatherInfo.daily[4].temp.min}
          />
        </div>
  );
}
}


// console.log({this.state})

const weatherCardStyle = {
  background: 'lightblue'
}

// Dates and times recieved from API are in UNIX format, use this function to convert to Date
export let convertUnixToDateTime = (unix_timestamp) => {
  var date = new Date(unix_timestamp * 1000);
  return date;
}

export default App;
