import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import {
  WeatherCard
} from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import RenderCards from './components/RenderCards'
import CardOptions from './components/CardOptions';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

class App extends Component {
  state = {
    weatherInfo: [],
    hourlyInfo: [],
    location: {
      lat: 41.8781,
      lng: -87.6298,
    },
    cityState: 'Chicago, IL, USA',
    cardOption: 'week'
  };

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.location.lat}&lon=${this.state.location.lng}&units=imperial&exclude=minutely,hourly,daily&appid=886705b4c1182eb1c69f28eb8c520e20`
      )
      .then((res) => this.setState({ currentWeatherInfo: res.data }));

    axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.location.lat}&lon=${this.state.location.lng}&units=imperial&exclude=minutely&appid=886705b4c1182eb1c69f28eb8c520e20`
    )
    .then((res) => this.setState({ weatherInfo: res.data }));
  }

  loadLocation = (location) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDXOKuD4KqV7u_1AY295qwmTYvbotatIMM`
      )
      .then((res) => {
        this.setState({
          location: res.data.results[0].geometry.location,
          cityState: res.data.results[0].formatted_address,
        });
        this.loadData();
      });
  };

  hourlyOptionHandler = () => this.setState({cardOption: 'hourly'})
  weekOptionHandler = () => this.setState({cardOption: 'week'})

  render() {
    if (
      this.state.weatherInfo.daily === undefined ||
      this.state.currentWeatherInfo.current === undefined
    ) {
      return <div />;
    }

    return (
      <div className="App">
        <SearchBar loadLocation={this.loadLocation} />
        <CurrentWeather
            // day={dayFull(this.state.currentWeatherInfo.current.dt)}
            weather={this.state.currentWeatherInfo.current.weather[0].main}
            currentTemp={this.state.currentWeatherInfo.current.temp}
            location={this.state.location}
            cityState={this.state.cityState}
            feelsLike={this.state.currentWeatherInfo.current.feels_like}
            high={this.state.weatherInfo.daily[0].temp.max}
            low={this.state.weatherInfo.daily[0].temp.min}
            pressure={this.state.currentWeatherInfo.current.pressure}
            humidity={this.state.currentWeatherInfo.current.humidity}
            sunRise={this.state.currentWeatherInfo.current.sunrise}
            sunSet={this.state.currentWeatherInfo.current.sunset}
          />
        <div className="todayContainer">
          <CardOptions hourHandler={this.hourlyOptionHandler} weekHandler={this.weekOptionHandler}/>
          <RenderCards weatherData={this.state.weatherInfo} renderOption={this.state.cardOption} time={new Date()} />
        </div>
        <div className="weatherCardContainer">
          <WeatherCard
            // day={dayAbbreviation(this.state.weatherInfo.daily[1].dt)}
            weather={this.state.weatherInfo.daily[1].weather[0].main}
            high={this.state.weatherInfo.daily[1].temp.max}
            low={this.state.weatherInfo.daily[1].temp.min}
            location={this.state.location}
          />
          <WeatherCard
            // day={dayAbbreviation(this.state.weatherInfo.daily[2].dt)}
            weather={this.state.weatherInfo.daily[2].weather[0].main}
            high={this.state.weatherInfo.daily[2].temp.max}
            low={this.state.weatherInfo.daily[2].temp.min}
          />
          <WeatherCard
            // day={dayAbbreviation(this.state.weatherInfo.daily[3].dt)}
            weather={this.state.weatherInfo.daily[3].weather[0].main}
            high={this.state.weatherInfo.daily[3].temp.max}
            low={this.state.weatherInfo.daily[3].temp.min}
          />
          <WeatherCard
            // day={dayAbbreviation(this.state.weatherInfo.daily[4].dt)}
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
};

export let convertUnixToTime = (unix_timestamp) => {
  var date = new Date(unix_timestamp * 1000).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return date;
};

export default App;
