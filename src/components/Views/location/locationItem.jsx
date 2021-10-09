import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../../api/fetchWeatherData';
import * as GLOBAL_CONSTANTS from '../../../GlobalConstants';
import './locationItem.css';

const LocationItem = props => {

        const [weatherData, setWeatherData] = useState([])

        useEffect(() => {
                const fetchData = async () => {
                        if (localStorage.getItem(props.locationName) !== null) {
                                setWeatherData(JSON.parse(localStorage.getItem(props.locationName)))
                        } else {
                                const fetchedWeatherData = await fetchWeatherData(props.locationName);
                                localStorage.setItem(props.locationName, JSON.stringify(fetchedWeatherData));
                                setWeatherData(fetchedWeatherData);
                        }
                }
                fetchData();
        }, [props]);

        function onDisplayMoreInfos () {
                window.location.href = GLOBAL_CONSTANTS.LOCATION_ENDPOINT;
        }

        return (
                <div className="location-item-container" onClick={() => onDisplayMoreInfos()}>
                        <p className="location-name">{props.locationName}</p>
                        <p className="location-temperature">{Object.keys(weatherData).length > 0 ? Math.round(weatherData.main.temp) + '\u00B0C' : 'Fetching...'}</p>
                </div>
        )
}

export default LocationItem;