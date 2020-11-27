import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './layout/HourCard.css'

export default function HourCard(props) {
    let tempRounded = Math.round(props.temp);

    return (
        <div className="hour-card-wrapper text-center">
            <span className="hour-card-time" xs={12}>{props.time.split(':')[0] + ' ' + props.time.split(' ')[1]}</span>
            <Container className="card-contents">
                <Row className="justify-content-center">
                    <Col className="hour-card-img px-0 py-1" xs={12}><img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt="weather icon"/></Col>
                    <Col className="hour-card-temp px-0 py-1" xs={12}>{tempRounded}&deg;</Col>
                </Row>
            </Container>
        </div>
    )
}
