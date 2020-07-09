import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";

// Choosing appropriate image for each weather scenario
export const selectWeather = (weather) => {
    if (weather === 'sunny') return faSun;
    if (weather === 'cloudy') return faCloud;
    if (weather === 'rain') return faCloudShowersHeavy;
}

//Shortening days of the week to abbreviations
export const dayAbbreviation = (day) => {
    if (day === 'Sunday') return 'Sun';
    if (day === 'Monday') return 'Mon';
    if (day === 'Tuesday') return 'Tue';
    if (day === 'Wednesday') return 'Wed';
    if (day === 'Thursday') return 'Thurs';
    if (day === 'Friday') return 'Fri';
    if (day === 'Saturday') return 'Sat';
}


export class WeatherCard extends Component {

    render() {
        // Assigning passed prop to a local variable
        const dayOfTheWeek = this.props.day;

        return (
            <div style={weatherCardStyle}>
                <p style={{fontSize: "2em"}}>{dayAbbreviation(dayOfTheWeek)}</p>
                <FontAwesomeIcon icon={selectWeather(this.props.weather)} size="2x" />
                <p>{this.props.low}º/{this.props.high}º</p>
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
    day: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    high: PropTypes.string.isRequired,
    low: PropTypes.string.isRequired
}

export default WeatherCard