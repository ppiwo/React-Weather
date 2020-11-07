import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './layout/HourCard.css'

export default function WeekCard(props) {
    let lowTempRounded = Math.round(props.tempLo);
    let highTempRounded = Math.round(props.tempHi);

    return (
        <Container className="week-card-wrapper">
            <Row className="justify-content-center">
                <Col className="week-card-time px-0 py-1" xs={12}>{props.day}</Col>
                <Col className="week-card-img px-0 py-1" xs={12}><img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt="weather icon" /></Col>
                <Col className="week-card-temp px-0 py-1" xs={12}>{lowTempRounded}&deg; {highTempRounded}&deg;</Col>
            </Row>
        </Container>
    )
}