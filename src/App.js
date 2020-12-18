import React, { Component } from 'react';
import './App.css'
import CurrentWeather from './components/CurrentWeather';
import RenderCards from './components/RenderCards'
import CardOptions from './components/CardOptions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header'
import LoadingSpinner from './components/LoadingSpinner'
import BottomDrawer from './components/bottom_drawer/BottomDrawer'

import axios from 'axios';

class App extends Component {
  state = {
    isLoading: true,
    weatherInfo: [],
    hourlyInfo: [],
    location: {
      lat: 41.8781,
      lng: -87.6298,
    },
    cityState: 'Chicago, IL',
    cardOption: 'today'
  };

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    this.setState({isLoading: true})
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.location.lat}&lon=${this.state.location.lng}&units=imperial&exclude=minutely,hourly,daily&appid=7b43afb8e983d5dcfce910df123df16b`
      )
      .then((res) => this.setState({ currentWeatherInfo: res.data }));

    axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.location.lat}&lon=${this.state.location.lng}&units=imperial&exclude=minutely&appid=7b43afb8e983d5dcfce910df123df16b`
    )
    .then((res) => this.setState({ weatherInfo: res.data, isLoading: false }));
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

  hourlyOptionHandler = () => this.setState({cardOption: 'today'})
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
        <div className="bg"/>
        <LoadingSpinner isLoading={this.state.isLoading} />
        {/* <SearchBar loadLocation={this.loadLocation} /> */}
        <Header location={this.state.cityState} />
        <CurrentWeather
            day={convertUnixToDateTime(this.state.currentWeatherInfo.current.dt)}
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
        <CardOptions hourHandler={this.hourlyOptionHandler} weekHandler={this.weekOptionHandler} cardOption={this.state.cardOption}/>
        <RenderCards weatherData={this.state.weatherInfo} renderOption={this.state.cardOption} time={new Date()} />
        <BottomDrawer weatherData={this.state.weatherInfo}/>
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
