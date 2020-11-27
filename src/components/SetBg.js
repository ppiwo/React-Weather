import React from 'react'
import Helmet from 'react-helmet';
import test from '../images/backgrounds/night/stars.js'
export default function SetBg(props) {
    let sunset = props.weather.current.sunset;
    let sunrise = props.weather.daily[1].sunrise;
    let currentTime = props.weather.current.dt;

    // if the current time is after sunset and before sunrise, it's night
    if (currentTime > sunset && currentTime < sunrise) {
        return (
            <div>
                <Helmet>
                    <script src="../images/backgrounds/night/stars.js" type="text/jsx" />
                    <noscript>{`<link rel="stylesheet" type="text/css" href="../images/backgrounds/night/stars.css" />`}</noscript>
                </Helmet>
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}
