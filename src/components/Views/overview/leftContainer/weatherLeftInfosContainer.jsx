import React from 'react';
import './weatherLeftInfosContainer.css';

const weatherLeftInfosContainer = props => {      
        return (
            <div className="weather-info-left-container">
                <p className="upper-info-display">Sunny</p>
                <p className="middle-info-display">12 {'\u00B0'}C</p>
                <div className="temperature-flex-container"> 
                    <p className="bottom-info-display-left">Highest: 25 {'\u00B0'}C</p>
                    <p className="bottom-info-display-right">Lowest: 12 {'\u00B0'}C</p>
                </div>
            </div>
        )
}

export default weatherLeftInfosContainer;
