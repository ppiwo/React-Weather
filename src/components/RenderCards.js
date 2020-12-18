import React from 'react';
import HourCard from './HourCard';
import WeekCard from './WeekCard';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './layout/RenderCards.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';

export default function RenderCards(props) {
    let weatherData = props.weatherData;
    let time, weatherIcon, temp;
    let dataMap = []

    weatherData.hourly.forEach(day =>  assignData(day));

    function assignData(day) {
        time = day.dt;
        weatherIcon = day.weather[0].icon;
        temp = day.temp;
        dataMap.push({'time': time, 'icon': weatherIcon, 'temp': temp})
    }

    function unixToDateHour(timestamp){
        let date = new Date(timestamp*1000);
        let hour = date.getHours();
        var ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
        hour = hour ? hour : 12; // the hour '0' should be '12'
        return `${hour}:00 ${ampm}`
    }

    function unixToDateDay(timestamp){
        let date = new Date(timestamp*1000);
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        return weekday[date.getUTCDay()];
    }

    function hourCardData(){
        let hoursToShow = 24;
        let hours = []
        for (let i = 0; i <= hoursToShow; i++){
            hours.push(i);
        }
        return hours;
    }

    function weekCardData(){
        let days = []
        for (let i = 0; i <= 7; i++){
            days.push(i);
        }
        return days;
    }

    if (props.renderOption === 'today'){
    return (
        <div className="card-slide-wrapper">
                <Container className="pl-1 pr-0">
                    <Swiper
                        spaceBetween={60}
                        slidesPerView={5}
                    >
                        {hourCardData().map((hour) => {
                            return (
                                <SwiperSlide>
                                    <HourCard time={unixToDateHour(dataMap[hour].time)} icon={dataMap[hour].icon} temp={dataMap[hour].temp} key={dataMap[hour].time} />
                                </SwiperSlide>
                            )})}
                    </Swiper>        
                </Container>
        </div>
    )
    }
        if (props.renderOption === 'week'){
            return (
                <div className="card-slider-wrapper">
                        <Container className="pl-1 pr-0">
                            <Swiper
                                spaceBetween={60}
                                slidesPerView={5}
                            >
                                {weekCardData().map((day) => {
                                    return (
                                        <SwiperSlide>
                                            <WeekCard 
                                                day={unixToDateDay(weatherData.daily[day].dt)} 
                                                icon={weatherData.daily[day].weather[0].icon} 
                                                tempLo={weatherData.daily[day].temp.min} 
                                                tempHi={weatherData.daily[day].temp.max} 
                                                key={weatherData.daily[day].dt}
                                            />
                                        </SwiperSlide>
                                )
                                })}
                            </Swiper>
                        </Container>
                </div>
            )
            }
}
