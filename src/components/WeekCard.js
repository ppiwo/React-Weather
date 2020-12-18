import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './layout/HourCard.css'

export default function WeekCard(props) {
    let lowTempRounded = Math.round(props.tempLo);
    let highTempRounded = Math.round(props.tempHi);

    return (
        <div className="week-card-wrapper text-center pb-3">
            <span className="week-card-day" xs={12}>{props.day.substring(0,3)}</span>
            <div className="card-contents">
                <Row className="justify-content-center">
                    <Col className="week-card-img px-0 pb-1" xs={12}><img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt="weather icon" /></Col>
                    <Col className="week-card-temp px-0 pt-1" xs={12}><span className="lo-temp">{lowTempRounded}&deg;</span> / <span className="hi-temp">{highTempRounded}&deg;</span></Col>
                </Row>
            </div>
        </div>
    )
}