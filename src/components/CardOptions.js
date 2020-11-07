import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CardOptions(props) {
    
    return (
        <Container>
            <Row>
                <Col><a href="#" title="Hourly forecast" onClick={props.hourHandler}>Hourly</a></Col>
                <Col><a href="#" title="Tomorrow's forecast" onClick={props.tomorrowHandler}>Tomorrow</a></Col>
                <Col><a href="#" title="Week forecast" onClick={props.weekHandler}>Week</a></Col>
            </Row>
        </Container>
    )
}
