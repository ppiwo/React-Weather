import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './CardOptions.css';

export default function CardOptions(props) {

    let appendActive = (currentCard) => {
        if (currentCard.valueOf() === props.cardOption) {
            return ' weather-active'
        } else {
            return ''
        }
    }
    // hourly
    // week
    return (
        <Container fluid='xs'>
            <Row className="justify-content-start text-left">
                <Col xs={2}><button className={`weather-option${appendActive('today')}`}  onClick={props.hourHandler}>Today</button></Col>
                <Col xs={2}><button className={`weather-option${appendActive('week')}`}  onClick={props.weekHandler}>Week</button></Col>
            </Row>
        </Container>
    )
}



