import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/fetchWeatherData';
import './locationItem.css';

const LocationItem = props => { 
        const [weatherData, setWeatherData] = useState([])

        useEffect(() => {
                const weatherData = fetchWeatherData();
                if(!weatherData){
                        setWeatherData(weatherData);
                }
        });
        console.log(weatherData)

        return (
                <div className="location-item-container">
                        <p className="location-name">{props.locationName}</p>
                </div>
        )
}

export default LocationItem;
