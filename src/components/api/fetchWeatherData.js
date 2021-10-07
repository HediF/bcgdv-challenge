import * as GLOBAL_CONSTANTS from '../../GlobalConstants';

export const fetchWeatherData = async (locationName) => {
    try {
        const response = await fetch(GLOBAL_CONSTANTS.WEATHER_ENDPOINT, {
            method: GLOBAL_CONSTANTS.METHODS.POST,
            headers: GLOBAL_CONSTANTS.HEADERS,
            body: JSON.stringify({
                location: locationName
            }) 
        })
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log("Error while fetching the weather information...")
    }
  };
  