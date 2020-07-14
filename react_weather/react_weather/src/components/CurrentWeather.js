import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {selectWeather, dayFull} from './WeatherCard';
import { convertUnixToTime } from '../App';


export class CurrentWeather extends Component {
    state(){

    }
    render() {

        return (
            <div>
                <h2>{this.props.day}</h2>
                <h4>{(this.props.cityState).split(',',2)}</h4>
                <h4 className='currentTime'>As of {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</h4>
                 <FontAwesomeIcon icon={selectWeather(this.props.weather)} size="6x" />
                <h3>Current Temperature: {Math.round(this.props.currentTemp)}º</h3> 
                <h4 className='feelsLike'>Feels like: {Math.round(this.props.feelsLike)}º </h4>
                <div className='weatherInfoColumns'>
                <h4>Low {Math.round(this.props.low)}º</h4>
                <h4>High {Math.round(this.props.high)}º</h4>
                <h4>Pressure: {this.props.pressure} hPa</h4>
                <h4>Humidity: {this.props.humidity}%</h4>
                <h4>Sun Rise: {convertUnixToTime(this.props.sunRise)}</h4>
                <h4>Sun Set: {convertUnixToTime(this.props.sunSet)}</h4>
                </div>
            </div>
        )
    }
}

//PropTypes
CurrentWeather.propTypes = {
    day: PropTypes.object.isRequired
}



export default CurrentWeather
