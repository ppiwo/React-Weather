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
    day = convertUnixToDateTime(day).getDay();
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
    day = convertUnixToDateTime(day).getDay();
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

    constructor(){
        super();
        this.state = {
            width: window.innerWidth,
    };
}

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    }

    render() {
        const {width} = this.state;
        const isMobile = width <= 500;
        const dayOfTheWeek = this.props.day;

        if (isMobile) {
            return(
                <div style={weatherCardStyleMobile}>
                    <div className='row'>
                        <div className='col'>
                            <p style={{fontSize: "1em"}}>{this.props.day}</p>
                        </div>
                        <div className='col'>
                            <FontAwesomeIcon icon={selectWeather(this.props.weather)} size="1x" />
                        </div>
                        <div className='col'>
                        <p>{Math.round(this.props.low)}º / {Math.round(this.props.high)}º</p>
                        </div>
                    </div>
                </div>
            );
        }else{
        return (
            <div style={weatherCardStyle}>
                <p style={{fontSize: "2em"}}>{this.props.day}</p>
                <FontAwesomeIcon icon={selectWeather(this.props.weather)} size="2x" />
                <p>{this.props.weather}</p>
                <p style={{textSize: '1em'}}>{Math.round(this.props.low)}º / {Math.round(this.props.high)}º</p>
            </div>
        )
    }
}
}

const weatherCardStyle = {
    backgroundColor: "#282C34",
    color: "#e6e5e8",
    width: "30%",
    margin: "1%",
    textAlign: "center",
    borderRadius: "3px",
    boxShadow: '0 0 12px 1px rgba(0, 0, 0, 0.13)'

}

const weatherCardStyleMobile = {
    display: 'table',
    tableLayout: 'fixed',
    width: '100%',
    margin: 'auto'
}

//PropTypes
WeatherCard.propTypes = {
    day: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
    high: PropTypes.number.isRequired,
    low: PropTypes.number.isRequired
}

export default WeatherCard