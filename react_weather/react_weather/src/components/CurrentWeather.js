import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class CurrentWeather extends Component {
    render() {
        const currentWeatherInfo = this.props.weather;
        console.log(this.props.weather.weatherInfo[0].id);
        return (
            <div>
                <h3>Current Temperature: {this.props.weather.weatherInfo[0].current}</h3>
            </div>
        )
    }
}

//PropTypes
CurrentWeather.propTypes = {
    weather: PropTypes.object.isRequired
}

export default CurrentWeather
