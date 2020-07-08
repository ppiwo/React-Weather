import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export class CurrentWeather extends Component {
    render() {
        const sunny = <i className="fas fa-sun" style={{color: "#000000" }}></i>;
        const currentWeatherInfo = this.props.weather;
        console.log(this.props.weather.weatherInfo[0].id);
        return (
            <div>
                <h3>Current Temperature: {this.props.weather.weatherInfo[0].current}</h3>
                <FontAwesomeIcon icon={faHome} />
            </div>
        )
    }
}

//PropTypes
CurrentWeather.propTypes = {
    weather: PropTypes.object.isRequired
}

export default CurrentWeather
