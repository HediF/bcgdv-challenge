import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../../api/fetchWeatherData';
import * as GLOBAL_CONSTANTS from '../../../GlobalConstants';
import './locationItem.css';

// A reusable location item which contains the name of the city and its current temperature
const LocationItem = props => {

        const [weatherData, setWeatherData] = useState([])

        useEffect(() => {
                // Method to fetch weather information regarding a specific city using props.
                // If the location data has already been fetched from the server, they will be retrieved directly from the localstorage
                const fetchData = async () => {
                        if (localStorage.getItem(props.locationName)) {
                                setWeatherData(JSON.parse(localStorage.getItem(props.locationName)))
                        } else {
                                let fetchedWeatherData = null;
                                fetchedWeatherData = await fetchWeatherData(props.locationName, props.myPosition);
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

        // Method to redirect to the stretch view when a location item is clicked
        function onDisplayMoreLocationInfos () {
                window.location.href = GLOBAL_CONSTANTS.LOCATION_ENDPOINT + '/' + props.locationName.toLowerCase();
        }

        // Display the temperature of the locations
        let currentTemperature = weatherData.main ? Math.round(weatherData.main.temp) + '\u00B0C' : (weatherData.current ? Math.round(weatherData.current.temp) + '\u00B0C' : 'Fetching...')

        return (
                <div id={props.locationName} className="location-item-container" onClick={() => onDisplayMoreLocationInfos()}>
                        <p className="location-name">{props.locationName}</p>
                        <p className="location-temperature">{currentTemperature}</p>
                </div>
        )
}

export default LocationItem;
