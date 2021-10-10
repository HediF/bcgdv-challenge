import React from 'react';
import './weatherLeftInfosContainer.css';

const weatherLeftInfosContainer = props => {
    return (
        <div className="weather-info-left-container">
            <p className="upper-info-display">{props.isMyLocation ? props.weather.weather[0].main : props.weather[0].main}</p>
            <p className="middle-info-display">{props.isMyLocation ? Math.round(props.temperature[0].temp.day) : Math.round(props.temperature.temp)} {'\u00B0'}C</p>
            <div className="temperature-flex-container">
                <p className="bottom-info-display-left">Highest: {props.isMyLocation ? Math.round(props.temperature[0].temp.max) : Math.round(props.temperature.temp_max)} {'\u00B0'}C</p>
                <p className="bottom-info-display-right">Lowest: {props.isMyLocation ? Math.round(props.temperature[0].temp.min) : Math.round(props.temperature.temp_min)} {'\u00B0'}C</p>
            </div>
        </div>
    )
}

export default weatherLeftInfosContainer;
