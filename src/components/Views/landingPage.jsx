import React, { Component } from 'react';
import './landingPage.css'
import * as GLOBAL_CONSTANTS from '../../GlobalConstants';
import LocationItem from './location/locationItem';
import Layout from '../containers/layout/layout';
import LocationsGrid from '../containers/grid/grid';

export default class landingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: [...GLOBAL_CONSTANTS.STANDARD_LOCATIONS],
            myPosition: null
        }
    }

    getPosition() {
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
        });
    }    
    
    async componentDidMount() {
        let position = await this.getPosition();
        let locations = [...this.state.locations];
        locations.unshift(GLOBAL_CONSTANTS.MY_LOCATION)
        this.setState({
            locations: locations,
            myPosition: position
        })
    }

    onRenderLocations() {
        let currentLocations = this.state.locations;
        let locationItems = currentLocations.map((location, index) => {
            return <LocationItem locationName={location} key={location + index} myPosition = {location === GLOBAL_CONSTANTS.MY_LOCATION ? this.state.myPosition : null} />
        })
        return locationItems;
    }

    render() {
        return (
            <Layout>
                <p className="dashboard-title">Dashboard</p>
                <LocationsGrid>
                    {this.onRenderLocations()}
                </LocationsGrid>
            </Layout>
        )
    };
}
