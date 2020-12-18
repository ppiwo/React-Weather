import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.scss';
import locationPin from '../../images/pin.svg';

import React from 'react';

export default function navbar(props) {
  return (
    <div>
      <div className="location-wrapper">
      <span className="city">{props.location.split(',')[0]},</span>
      <span className="state">{props.location.split(',')[1]}</span>
      <button className="location-pin" href="#"><img src={locationPin}></img></button>
      </div>
    </div>
  );
}

