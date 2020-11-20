import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = { };
  }
  render() {
    return (
      <div>
          <Container>
            <Row className="justify-content-center text-center">
                {/* <Col className="city-wrapper" xs={12}><h4>{this.props.cityState.split(',', 2)}</h4></Col> */}
                <Col className="today-wrapper" xs={12}><h2>Today</h2></Col>
                <Col className="current-temp-wrapper" xs={12}><h3>{Math.round(this.props.currentTemp)}º</h3></Col>
                <Col className="feels-like-wrapper" xs={12}>Feels like: {Math.round(this.props.feelsLike)}º{' '}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

//PropTypes
CurrentWeather.propTypes = {
  // day: PropTypes.object.isRequired,
};

export default CurrentWeather;
