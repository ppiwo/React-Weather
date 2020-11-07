import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './layout/HourCard.css'

export default function HourCard(props) {
    let tempRounded = Math.round(props.temp);

    return (
        <Container className="hour-card-wrapper">
            <Row className="justify-content-center">
                <Col className="hour-card-time px-0 py-1" xs={12}>{props.time}</Col>
                <Col className="hour-card-img px-0 py-1" xs={12}><img src={`http://openweathermap.org/img/wn/${props.icon}.png`} /></Col>
                <Col className="hour-card-temp px-0 py-1" xs={12}>{tempRounded}&deg;</Col>
            </Row>
        </Container>
    )
}
