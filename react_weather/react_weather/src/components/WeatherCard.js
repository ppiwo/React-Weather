import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faCloudShowersHeavy, faBolt, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { convertUnixToDateTime } from '../App';

// Choosing appropriate image for each weather scenario
export const selectWeather = (weather) => {
    if (weather === 'Thunderstorm') return faBolt;
    if (weather === 'Rain' || weather === 'Drizzle') return faCloudShowersHeavy;
    if (weather === 'Snow') return faSnowflake;
    if (weather === 'Clouds') return faCloud;
    else return faSun;
}

//Converts days from getDay() format (0-6) to string abbreviations
export const dayAbbreviation = (day) => {
    console.log('before ' + day)
    day = convertUnixToDateTime(day)
    console.log('after ' + day)
    day = day.getDay();
    console.log(day)
    if (day === 0) return 'Sun';
    if (day === 1) return 'Mon';
    if (day === 2) return 'Tue';
    if (day === 3) return 'Wed';
    if (day === 4) return 'Thurs';
    if (day === 5) return 'Fri';
    if (day === 6) return 'Sat';
    else return 'undefined'
}

//Converts days from getDay() format (0-6) to string representations
export const dayFull = (day) => {
    console.log(day)
    if (day === 0) return 'Sunday';
    if (day === 1) return 'Monday';
    if (day === 2) return 'Tuesday';
    if (day === 3) return 'Wednesday';
    if (day === 4) return 'Thursday';
    if (day === 5) return 'Friday';
    if (day === 6) return 'Saturday';
    else return 'undefined'
}


export class WeatherCard extends Component {

    render() {
        // Assigning passed prop to a local variable
        const dayOfTheWeek = this.props.day;

        return (
            <div style={weatherCardStyle}>
                <p style={{fontSize: "2em"}}>{this.props.day}</p>
                <FontAwesomeIcon icon={selectWeather(this.props.weather)} size="2x" />
                <p>{this.props.weather}</p>
                <p>{this.props.low}º / {this.props.high}º</p>
            </div>
        )
    }
}

const weatherCardStyle = {
    backgroundColor: "grey",
    width: "175px",
    padding: "15px",
    margin: "5px",
    textAlign: "center"

}

//PropTypes
WeatherCard.propTypes = {
    day: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
    high: PropTypes.number.isRequired,
    low: PropTypes.number.isRequired
}

export default WeatherCard