import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Header extends Component {
    render() {
        return (
            <div>
                <FontAwesomeIcon icon="fas fa-bars" />
                <h2 style={headerStyle}>React Weather</h2>
            </div>
        )
    }
}

const headerStyle = {
    textAlign: 'center'
}

export default Header
