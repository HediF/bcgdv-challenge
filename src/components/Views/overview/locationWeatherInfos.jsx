import React from 'react';
import Layout from '../../containers/layout/layout';
import { ic_keyboard_backspace_outline } from 'react-icons-kit/md/ic_keyboard_backspace_outline'
import { Icon } from 'react-icons-kit';
import WeatherInfosTable from './informationTable/weatherInfosTable';
import WeatherInfosLeftContainer from './leftContainer/weatherLeftInfosContainer';
import * as GLOBAL_CONSTANTS from '../../../GlobalConstants';
import './locationWeatherInfos.css';

const LocationWeatherInfos = props => {

        let cityName = capitalizeFirstLetter(window.location.href.split("/").pop()).replace(/%20/g, " ");
        let cityWeatherInfos = JSON.parse(localStorage.getItem(cityName));
        let isMyLocation = cityName === GLOBAL_CONSTANTS.STANDARD_LOCATIONS[0];

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
                                <WeatherInfosLeftContainer
                                        isMyLocation={isMyLocation}
                                        temperature={isMyLocation ? cityWeatherInfos.daily : cityWeatherInfos.main}
                                        weather={isMyLocation ? cityWeatherInfos.current : cityWeatherInfos.weather}
                                />
                                <WeatherInfosTable weatherInfos={cityWeatherInfos} isMyLocation={isMyLocation} />
                        </div>
                </Layout>
        )
}

export default LocationWeatherInfos;
