import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {selectWeather} from './WeatherCard';
// import { faSun, faCloud, faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";


export class CurrentWeather extends Component {
    render() {
        const todaysWeather = this.props.weather.weatherInfo[0].weather;
        console.log(todaysWeather);
        return (
            <div style={todaysWeatherStyle}>
                <FontAwesomeIcon icon={selectWeather(todaysWeather)} size="6x" />
                <h3>Current Temperature: {this.props.weather.weatherInfo[0].current}</h3>
            </div>
        )
    }
}

const todaysWeatherStyle = {
    textAlign: 'center'
}

//PropTypes
CurrentWeather.propTypes = {
    weather: PropTypes.object.isRequired
}

export default CurrentWeather
