import React from 'react';
import './weatherLeftInfosContainer.css';

const weatherLeftInfosContainer = props => {      
        return (
            <div className="weather-info-left-container">
                <p className="upper-info-display">{props.weather[0].main}</p>
                <p className="middle-info-display">{Math.round(props.temperature.temp)} {'\u00B0'}C</p>
                <div className="temperature-flex-container"> 
                    <p className="bottom-info-display-left">Highest: {Math.round(props.temperature.temp_max)} {'\u00B0'}C</p>
                    <p className="bottom-info-display-right">Lowest: {Math.round(props.temperature.temp_min)} {'\u00B0'}C</p>
                </div>
            </div>
        )
}

export default weatherLeftInfosContainer;
