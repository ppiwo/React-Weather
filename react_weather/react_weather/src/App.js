import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import CurrentWeather from './components/CurrentWeather';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
// import backgroundImage from '../public/backgrounds/rain_background.jpg'

import axios from 'axios';

class App extends Component {
  state = {
    weatherInfo: 
    [],
    currentWeatherInfo:
    []
  }
  //Making request to Open Weather Map API
//   let makeRequest = (lat,long,exclude) => {
//   axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&exclude=' + exclude +'&appid=' + process.env.REACT_APP_API_KEY)
//   .then(res => this.setState({weatherInfo: res.data}))
// }


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
    if (!this.state.weatherInfo){
      return <div />
    }
  return (
    <div className="App">
      <SearchBar />
      <div className="todayContainer">
        <Header /> 
        <CurrentWeather weather={this.state.currentWeatherInfo} />
         </div>
          <WeatherCard 
            style={weatherCardStyle}  
            day={this.convertUnixToDateTime(this.state.weatherInfo.daily[0].dt)} 
            weather={this.state.weatherInfo[4].weather} 
            high={this.state.weatherInfo[4].high} 
            low={this.state.weatherInfo[4].low}
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
  console.log(date)
  return date;
}

export default App;
