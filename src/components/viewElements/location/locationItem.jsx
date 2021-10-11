import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../../api/fetchWeatherData';
import * as GLOBAL_CONSTANTS from '../../../GlobalConstants';
import './locationItem.css';

const LocationItem = props => {

        const [weatherData, setWeatherData] = useState([])

        useEffect(() => {
                const fetchData = async () => {
                        if (localStorage.getItem(props.locationName)) {
                                setWeatherData(JSON.parse(localStorage.getItem(props.locationName)))
                        } else {
                                let fetchedWeatherData = null;
                                fetchedWeatherData = await fetchWeatherData(props.locationName, props.myPosition);
                                console.log(fetchedWeatherData)
                                if(fetchedWeatherData.main || fetchedWeatherData.current) {
                                        localStorage.setItem(props.locationName, JSON.stringify(fetchedWeatherData));
                                        setWeatherData(fetchedWeatherData);        
                                } else {
                                        props.cityNotFound(props.locationName);
                                }
                        }
                }
                fetchData();
        }, [props]);

        function onDisplayMoreLocationInfos () {
                window.location.href = GLOBAL_CONSTANTS.LOCATION_ENDPOINT + '/' + props.locationName.toLowerCase();
        }

        let currentTemperature = weatherData.main ? Math.round(weatherData.main.temp) + '\u00B0C' : (weatherData.current ? Math.round(weatherData.current.temp) + '\u00B0C' : 'Fetching...')
        console.log(props.locationName)
        return (
                <div id={props.locationName} className="location-item-container" onClick={() => onDisplayMoreLocationInfos()}>
                        <p className="location-name">{props.locationName}</p>
                        <p className="location-temperature">{currentTemperature}</p>
                </div>
        )
}

export default LocationItem;
