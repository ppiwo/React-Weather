import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <h2 style={headerStyle}>React Weather</h2>
            </div>
        )
    }
}

const headerStyle = {
    textAlign: 'center'
}

export default Header
