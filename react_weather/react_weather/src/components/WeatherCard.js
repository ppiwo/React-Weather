import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faCloudShowersHeavy, faBolt, faSnowflake } from "@fortawesome/free-solid-svg-icons";

// Choosing appropriate image for each weather scenario
export const selectWeather = (weather) => {
    if (weather >= 200 && weather <= 232) return faBolt;
    if (weather >= 300 && weather <= 531) return faCloudShowersHeavy;
    if (weather >= 600 && weather <= 622) return faSnowflake;
    if (weather >= 801) return faSnowflake;
    else return faSun;
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
    high: PropTypes.number.isRequired,
    low: PropTypes.number.isRequired
}

export default WeatherCard