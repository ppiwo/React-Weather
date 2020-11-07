import React from 'react';
import HourCard from './HourCard';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function HourCards(props) {
    let weatherData = props.weatherData;
    let time, weatherIcon, temp;
    let dataMap = []

    weatherData.forEach(day =>  assignData(day));

    function assignData(day) {
        time = day.dt;
        weatherIcon = day.weather[0].icon;
        temp = day.temp;
        dataMap.push({'time': time, 'icon': weatherIcon, 'temp': temp})
    }

    function unixToDate(timestamp){
        let date = new Date(timestamp*1000);
        let hour = date.getHours();
        var ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
        hour = hour ? hour : 12; // the hour '0' should be '12'
        return `${hour}:00 ${ampm}`
    }

    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={4}>
                        <HourCard time={unixToDate(dataMap[0].time)} icon={dataMap[0].icon} temp={Number(dataMap[0].temp)} />
                    </Col>
                    <Col xs={4}>
                        <HourCard time={unixToDate(dataMap[1].time)} icon={dataMap[1].icon} temp={dataMap[1].temp} />
                    </Col>
                    <Col xs={4}>
                        <HourCard time={unixToDate(dataMap[3].time)} icon={dataMap[3].icon} temp={dataMap[3].temp} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
