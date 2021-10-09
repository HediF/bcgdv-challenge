import React from 'react';
import './weatherLeftInfosContainer.css';

const weatherLeftInfosContainer = props => {      
        return (
            <div className="weather-info-left-container">
                <p className="upper-info-display">Sunny</p>
                <p className="middle-info-display">12 \u00B0C</p>
                <p className="bottom-info-display">This is more information</p>
            </div>
        )
}

export default weatherLeftInfosContainer;
