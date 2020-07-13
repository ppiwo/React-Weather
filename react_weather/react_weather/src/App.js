import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import {WeatherCard, dayAbbreviation, dayFull} from './components/WeatherCard';
import SearchBar from './components/SearchBar';

import axios from 'axios';

class App extends Component {
  state = {
    weatherInfo: 
    [],
    currentWeatherInfo:
    [],
    location: 
      {
      lat: 41.8781,
      lng: -87.6298
      },
  }

  componentDidMount(){
    console.log(this.state.location.lat)
    this.loadData();
    console.log('did mount')
  }



  loadData() {
    console.log('load data')
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.location.lat}&lon=${this.state.location.lng}&units=imperial&exclude=minutely,hourly,daily&appid=886705b4c1182eb1c69f28eb8c520e20`)
  .then(res => this.setState({currentWeatherInfo: res.data}))

  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.location.lat}&lon=${this.state.location.lng}&units=imperial&exclude=minutely,hourly,current&appid=886705b4c1182eb1c69f28eb8c520e20`)
  .then(res => this.setState({weatherInfo: res.data}))
  .then(console.log('set state'))

  }

  loadLocation = (location) => {
    console.log('load location')
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDXOKuD4KqV7u_1AY295qwmTYvbotatIMM`)
    .then(res => this.setState({location: res.data.results[0].geometry.location}));
    this.loadData();
  }


  render(){
    if (this.state.weatherInfo.daily === undefined || this.state.currentWeatherInfo.current === undefined){
      return <div />
    }
  
  return (
    <div className="App">
      <SearchBar loadLocation={this.loadLocation}/>
      <div className="todayContainer">
        <CurrentWeather 
        day={dayFull(this.state.currentWeatherInfo.current.dt)} 
        weather={this.state.currentWeatherInfo.current.weather[0].main} 
        currentTemp={this.state.currentWeatherInfo.current.temp}
        location={this.state.location}
        />
      </div>
      <div className="weatherCardContainer">
          <WeatherCard  
            day={dayAbbreviation(this.state.weatherInfo.daily[1].dt)} 
            weather={this.state.weatherInfo.daily[1].weather[0].main} 
            high={this.state.weatherInfo.daily[1].temp.max} 
            low={this.state.weatherInfo.daily[1].temp.min}
            location={this.state.location}
          />
          <WeatherCard 
            day={dayAbbreviation(this.state.weatherInfo.daily[2].dt)} 
            weather={this.state.weatherInfo.daily[2].weather[0].main} 
            high={this.state.weatherInfo.daily[2].temp.max} 
            low={this.state.weatherInfo.daily[2].temp.min}
          />
          <WeatherCard 
            day={dayAbbreviation(this.state.weatherInfo.daily[3].dt)} 
            weather={this.state.weatherInfo.daily[3].weather[0].main} 
            high={this.state.weatherInfo.daily[3].temp.max} 
            low={this.state.weatherInfo.daily[3].temp.min}
          />
          <WeatherCard  
            day={dayAbbreviation(this.state.weatherInfo.daily[4].dt)} 
            weather={this.state.weatherInfo.daily[4].weather[0].main} 
            high={this.state.weatherInfo.daily[4].temp.max} 
            low={this.state.weatherInfo.daily[4].temp.min}
          />
          </div>
        </div>
  );
}
}

// Dates and times recieved from API are in UNIX format, use this function to convert to Date
export let convertUnixToDateTime = (unix_timestamp) => {
  var date = new Date(unix_timestamp * 1000);
  return date;
}

export default App;
