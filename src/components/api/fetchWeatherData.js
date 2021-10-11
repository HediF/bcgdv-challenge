import * as GLOBAL_CONSTANTS from '../../GlobalConstants';

// Method to direct a post request containing locationName/Position coordinates to the server in order to fetch weather infos
export const fetchWeatherData = async (locationName, position = null) => {
    try {
        const response = await fetch(GLOBAL_CONSTANTS.WEATHER_ENDPOINT, {
            method: GLOBAL_CONSTANTS.METHODS.POST,
            headers: GLOBAL_CONSTANTS.HEADERS,
            body: JSON.stringify({
                location: locationName,
                latitude: position ? position.coords.latitude : null,
                longitude: position ? position.coords.longitude : null
            }) 
        })
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log("Error while fetching the weather information...")
    }
  };
  