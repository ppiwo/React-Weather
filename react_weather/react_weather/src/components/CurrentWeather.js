import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {selectWeather, dayFull} from './WeatherCard';


export class CurrentWeather extends Component {
    render() {

        //Making sure all props are loaded before rendering
        // if (this.props.day === undefined){
        //     return <div />
        // }

        // const todaysWeather = this.props.weather.current;

        return (
            <div>
                <h2>{this.props.day}</h2>
                 <FontAwesomeIcon icon={selectWeather(this.props.weather)} size="6x" />
                <h3>Current Temperature: {this.props.currentTemp}</h3> 
            </div>
        )
    }
}

const todaysWeatherStyle = {
    textAlign: 'center'
}

//PropTypes
CurrentWeather.propTypes = {
    day: PropTypes.object.isRequired
}



export default CurrentWeather
