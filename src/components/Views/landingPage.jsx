import React, { Component } from 'react';
import './landingPage.css'
import * as GLOBAL_CONSTANTS from '../../GlobalConstants';
import LocationItem from '../location/locationItem';
import Layout from '../containers/layout';

export default class landingPage extends Component {   

    constructor(props) {
        super(props);       
        this.state = { 
            locations: [...GLOBAL_CONSTANTS.STANDARD_LOCATIONS],
        }
    }

    onRenderLocations() {
        let currentLocations = this.state.locations;
        let locationItems = currentLocations.map((location,index) => {
            return <LocationItem locationName={location} key={location+index}/>
        })
        return locationItems;
    }

    // async onFetchWeatherData() {
    //     try {
    //         const response = await fetch(GLOBAL_CONSTANTS.WEATHER_ENDPOINT, {
    //             method: GLOBAL_CONSTANTS.METHODS.GET,
    //             headers: GLOBAL_CONSTANTS.HEADERS,
    //         })
    //         const data = await response.json();
    //         console.log(data)
    //         this.setState({ weatherData: data })
    //     } catch (e) {
    //         console.log("Error while fetching the weather information...")
    //     }
    // }

    render() {
        return (
            <Layout>
                <div className="locations-grid">
                        {this.onRenderLocations()}
                </div>
            </Layout>
        )
    };
}
