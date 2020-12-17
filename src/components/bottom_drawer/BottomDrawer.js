import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';

import './BottomDrawer.css'
import chevUp from './up-chevron.svg'

export default class DrawerCart extends Component {
    constructor(props) {
        super();
        this.state = {
          isActive: false,
          display: 'today'
        };
      }

    render() {
        let toggleDrawer = () => this.setState({isActive: !this.state.isActive})
        let drawerClassName = this.state.isActive ? 'drawer-wrapper active pb-5' : 'drawer-wrapper pb-5';
        
        let convertUnixToTime = (unix_timestamp) => {
            var date = new Date(unix_timestamp * 1000).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                });
            return date;
            };

        if (this.state.display === 'today'){
            return (
                <div className={drawerClassName} onClick={toggleDrawer}>
                    <Container fluid>
                        <Row>
                            <Col xs={12}>
                                <div className="img-wrapper">
                                    <img src={chevUp} alt="chevron up"></img>
                                </div>
                            </Col>
                                <div className="divider"></div>
                                <Col className="" xs={6}>
                                    <p className="font-weight-bold mb-0">Sunrise</p>
                                    <p className="mb-2">{convertUnixToTime(this.props.weatherData.current.sunrise)}</p>
                                </Col>
                                <Col xs={6}>
                                    <p className="font-weight-bold mb-0">Sunset</p>
                                    <p className="mb-2">{convertUnixToTime(this.props.weatherData.current.sunset)}</p>
                                </Col>
                                <Col xs={6}>
                                    <p className="font-weight-bold mb-0">Dew Point</p>
                                    <p className="mb-2">{Math.round(this.props.weatherData.current.dew_point)} ℉</p>
                                </Col>
                                <Col xs={6}>
                                    <p className="font-weight-bold mb-0">Wind</p>
                                    <p className="mb-2">{Math.round(this.props.weatherData.current.wind_speed)} MPH</p>
                                </Col>
                                <Col xs={6}>
                                    <p className="font-weight-bold mb-0">Pressure</p>
                                    <p className="mb-2">{this.props.weatherData.current.pressure} hPa</p>
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
