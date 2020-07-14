import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {selectWeather, dayFull} from './WeatherCard';


export class CurrentWeather extends Component {
    state(){

    }
    render() {

        return (
            //add: feels like, low, high, wind, chance of percip, air quality index, pressure, visibility, humidity, sun rise sun set
            <div>
                <h2>{this.props.day}</h2>
                <h4>{(this.props.cityState).split(',',2)}</h4>
                <h4>As of {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</h4>
                 <FontAwesomeIcon icon={selectWeather(this.props.weather)} size="6x" />
                <h3>Current Temperature: {Math.round(this.props.currentTemp)}º</h3> 
                <h3>Feels like: </h3>
                <h3>High / Low: </h3>
                <h3>Chance of Percipitation: </h3>
                <h3>Pressure</h3>
                <h3>Humidity</h3>
                <h3>Sun Rise:</h3>
                <h3>Sun Set</h3>
            </div>
        )
    }
}

//PropTypes
CurrentWeather.propTypes = {
    day: PropTypes.object.isRequired
}



export default CurrentWeather
