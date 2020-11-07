import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CardOptions(props) {
    
    return (
        <Container fluid='xs'>
            <Row className="justify-content-start text-left">
                <Col xs={2}><button onClick={props.hourHandler}>Today</button></Col>
                <Col xs={2}><button onClick={props.weekHandler}>Tomorrow</button></Col>
            </Row>
        </Container>
    )
}
