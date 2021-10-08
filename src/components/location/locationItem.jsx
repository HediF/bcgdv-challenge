import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/fetchWeatherData';
import './locationItem.css';

const LocationItem = props => {
        const [weatherData, setWeatherData] = useState([])


        useEffect(() => {
                const fetchData = async () => {
                        const fetchedWeatherData = await fetchWeatherData(props.locationName);
                        setWeatherData(fetchedWeatherData);
                }
                fetchData();
        }, []);

        return (
                <div className="location-item-container">
                        <p className="location-name">{props.locationName}</p>
                        <p className="location-temperature">{Math.round(weatherData.main.temp) + '\u00B0' + 'C'}</p>
                </div>
        )
}

export default LocationItem;
