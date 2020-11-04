import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CurrentWeather extends Component {
  state() {}
  render() {
    return (
      <div>
        <div className="icon-wrapper">
          <img src={`http://openweathermap.org/img/wn/${this.props.weatherIcon}@2x.png`} />
        </div>
        <h3>{Math.round(this.props.currentTemp)}º</h3>
        <h4>{this.props.cityState.split(',', 2)}</h4>
        {/* <h2>{this.props.day}</h2> */}
        {/* <h4 className="feelsLike">
          Feels like: {Math.round(this.props.feelsLike)}º{' '}
        </h4> */}
        {/* <div className="weatherInfoColumns">
          <h4>Low {Math.round(this.props.low)}º</h4>
          <h4>High {Math.round(this.props.high)}º</h4> */}
          {/* <h4>Pressure: {this.props.pressure} hPa</h4> */}
          {/* <h4>Humidity: {this.props.humidity}%</h4> */}
          {/* <h4>Sun Rise: {convertUnixToTime(this.props.sunRise)}</h4> */}
          {/* <h4>Sun Set: {convertUnixToTime(this.props.sunSet)}</h4> */}
        {/* </div> */}
      </div>
    );
  }
}

//PropTypes
CurrentWeather.propTypes = {
  day: PropTypes.object.isRequired,
};

export default CurrentWeather;
