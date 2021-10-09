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
        }
    }
    
    onRenderLocations() {
        let currentLocations = this.state.locations;
        let locationItems = currentLocations.map((location, index) => {
            return <LocationItem locationName={location} key={location + index} />
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
