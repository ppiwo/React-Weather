import React from 'react';
import Navbar from './Navbar';
import './Header.css';

export default function Header(props) {
    return (
        <div>
            <Navbar location={props.location} />
        </div>
    )
}

