import React from 'react';
import './locationItem.css';

const locationItem = (props) => (
        <div className="location-item-container">
                <p className="location-name">{props.locationName}</p>
        </div>
);

export default locationItem;
