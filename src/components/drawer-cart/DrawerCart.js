import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';

import './DrawerCart.css'
import chevUp from './up-chevron.svg'

export default class DrawerCart extends Component {
    constructor() {
        super();
        this.state = {
          isActive: false,
          display: 'today'
        };
      }

    render() {
        let toggleDrawer = () => this.setState({isActive: !this.state.isActive})
        let drawerClassName = this.state.isActive ? 'drawer-wrapper active pb-5' : 'drawer-wrapper pb-5';

        if (this.state.display === 'today'){
            return (
                <div className={drawerClassName} onClick={toggleDrawer}>
                    <Container fluid>
                        <Row>
                            <Col xs={12}>
                                <div className="img-wrapper pb-5 mb-1">
                                    <img src={chevUp} alt="chevron up"></img>
                                </div>
                            </Col>
                                <div className="divider"></div>
                                <Col xs={6}>
                                    <h4>Sunrise</h4>
                                    <h5>Data</h5>
                                </Col>
                                <Col xs={6}>
                                    <h4>Sunset</h4>
                                    <h5>Data</h5>
                                </Col>
                                <Col xs={6}>
                                    <h4>Percipitation</h4>
                                    <h5>Data</h5>
                                </Col>
                                <Col xs={6}>
                                    <h4>Humidity</h4>
                                    <h5>Data</h5>
                                </Col>
                                <Col xs={6}>
                                    <h4>Wind</h4>
                                    <h5>Data</h5>
                                </Col>
                                <Col xs={6}>
                                    <h4>Pressure</h4>
                                    <h5>Data</h5>
                                </Col>
                        </Row>
                    </Container>
                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
}
