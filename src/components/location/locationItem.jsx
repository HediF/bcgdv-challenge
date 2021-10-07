import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/fetchWeatherData';
import './locationItem.css';

const LocationItem = props => { 
        const [weatherData, setWeatherData] = useState([])

        useEffect(() => {
                const weatherData = fetchWeatherData(props.locationName);
                if(!weatherData){
                        setWeatherData(weatherData);
                }
        });

        return (
                <div className="location-item-container">
                        <p className="location-name">{props.locationName}</p>
                </div>
        )
}

export default LocationItem;
