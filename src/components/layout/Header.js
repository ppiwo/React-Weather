import React, { Component } from 'react';
import Navbar from './Navbar';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}

const headerStyle = {
    textAlign: 'center'
}

export default Header
