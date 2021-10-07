import * as GLOBAL_CONSTANTS from '../../GlobalConstants';

export const fetchWeatherData = async () => {
    try {
        const response = await fetch(GLOBAL_CONSTANTS.WEATHER_ENDPOINT, {
            method: GLOBAL_CONSTANTS.METHODS.GET,
            headers: GLOBAL_CONSTANTS.HEADERS,
        })
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log("Error while fetching the weather information...")
    }
  };
  