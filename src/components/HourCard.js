import React from 'react'

export default function HourCard(props) {
    return (
        <div>
            <span>{props.time}</span>
            <span>{props.temp}</span>
            <span>{props.icon}</span>
        </div>
    )
}
