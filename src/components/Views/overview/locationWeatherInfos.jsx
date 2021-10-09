import React from 'react';
import Layout from '../../containers/layout/layout';
import { ic_keyboard_backspace_outline } from 'react-icons-kit/md/ic_keyboard_backspace_outline'
import { Icon } from 'react-icons-kit';
import WeatherInfosTable from './informationTable/weatherInfosTable';
import WeatherInfosLeftContainer from './leftContainer/weatherLeftInfosContainer';
import './locationWeatherInfos.css';

const LocationWeatherInfos = props => {

        var cityName = capitalizeFirstLetter(window.location.href.split("/").pop());
        var cityWeatherInfos = JSON.parse(localStorage.getItem(cityName));
        console.log(cityWeatherInfos)
        function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
        }

        function redirectToLandingPage() {
                window.location.href = '/';
        }

        return (
                <Layout>
                        <div>
                                <Icon className='back-button' size={'100%'} onClick={() => redirectToLandingPage()} icon={ic_keyboard_backspace_outline} />
                                <p className="location-infos-header">{cityName}</p>
                        </div>
                        <div className="flex-container">
                                <WeatherInfosLeftContainer temperature = {cityWeatherInfos.main} weather = {cityWeatherInfos.weather}/>
                                <WeatherInfosTable weatherInfos = {cityWeatherInfos}/>
                        </div>
                </Layout>
        )
}

export default LocationWeatherInfos;
