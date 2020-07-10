import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {selectWeather} from './WeatherCard';


export class CurrentWeather extends Component {
    render() {

        //Making sure all props are loaded before rendering
        if (this.props.weather.current === undefined){
            return <div />
        }

        const todaysWeather = this.props.weather.current;
        console.log(todaysWeather.weather[0].id);

        return (
            <div>
                
                 <FontAwesomeIcon icon={selectWeather(todaysWeather.weather[0].id)} size="6x" />
                <h3>Current Temperature: {todaysWeather.temp}</h3> 
            </div>
        )
    }
}

const todaysWeatherStyle = {
    textAlign: 'center'
}

//PropTypes
CurrentWeather.propTypes = {
    weather: PropTypes.array.isRequired
}



export default CurrentWeather
