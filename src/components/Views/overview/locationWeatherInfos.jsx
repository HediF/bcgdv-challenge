import React from 'react';
import Layout from '../../containers/layout/layout';
import './locationWeatherInfos.css';

const LocationWeatherInfos = props => {

        var cityName = capitalizeFirstLetter(window.location.href.split("/").pop());
        var cityWeatherInfos = JSON.parse(localStorage.getItem(cityName));
        console.log(cityWeatherInfos)
        function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
        }
              
        return (
                <Layout>
                        <div className="location-infos-container">{cityName}</div>
                </Layout>      
        )
}

export default LocationWeatherInfos;
