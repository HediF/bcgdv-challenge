import React, { Component } from 'react';
import './landingPage.css'
import * as GLOBAL_CONSTANTS from '../../GlobalConstants';
import LocationItem from './location/locationItem';
import Layout from '../containers/layout/layout';
import LocationsGrid from '../containers/grid/grid';
import {ic_search} from 'react-icons-kit/md/ic_search'
import Icon from 'react-icons-kit';

export default class landingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: [...GLOBAL_CONSTANTS.STANDARD_LOCATIONS],
            myPosition: null,
            addedCity: '',
            notFoundCity: null
        }
    }

    getPosition() {
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
        });
    }    
    
    async componentDidMount() {
        let position = await this.getPosition();
        let locations = JSON.parse(localStorage.getItem(GLOBAL_CONSTANTS.STORED_LOCATIONS)) || [...GLOBAL_CONSTANTS.STANDARD_LOCATIONS];
        if(!locations.includes(GLOBAL_CONSTANTS.MY_LOCATION)) {
            locations.unshift(GLOBAL_CONSTANTS.MY_LOCATION)
        }
        this.setState({
            locations: locations,
            myPosition: position
        })
    }

    onCityNotFound(city) {
        let locations = JSON.parse(localStorage.getItem(GLOBAL_CONSTANTS.STORED_LOCATIONS));
        let newLocations = locations.filter((location) => {
            return location !== city;
        })
        this.setState({locations: newLocations, notFoundCity: city});
        localStorage.setItem(GLOBAL_CONSTANTS.STORED_LOCATIONS, JSON.stringify(newLocations));
    }

    onRenderLocations() {
        let currentLocations = this.state.locations;
        let locationItems = currentLocations.map((location, index) => {
            return <LocationItem 
                        locationName={location} 
                        key={location + index} 
                        myPosition = {location === GLOBAL_CONSTANTS.MY_LOCATION ? this.state.myPosition : null} 
                        cityNotFound = {(notFoundCity) => this.onCityNotFound(notFoundCity)}
                    />
        })
        return locationItems;
    }

    handleInputChange (e) {
        let city = this.capitalizeFirstLetter(e.target.value.toLowerCase()); 
        this.setState({ addedCity: city });
    }

    handleSearch () {
        let city = this.state.addedCity;
        if (!this.state.locations.includes(city) && city !== ''){
            let newLocationsList = [...this.state.locations, city];
            localStorage.setItem(GLOBAL_CONSTANTS.STORED_LOCATIONS, JSON.stringify(newLocationsList));
            this.setState({ locations: newLocationsList , addedCity: '', notFoundCity: null});    
        }
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <Layout>
                <p className="dashboard-title">Dashboard</p>
                <div className="search-container"> 
                    <Icon  className='search-icon' size={'100%'} icon={ic_search}/>
                    <input className="add-weather-input" placeholder="Select a new city..." value={this.state.addedCity} onChange={(e) => this.handleInputChange(e)}/>
                    <button className="display-weather" onClick={() => this.handleSearch()}>Display weather</button>
                </div>
                <p className="not-found">{this.state.notFoundCity ? 'Could not find data for: ' + this.state.notFoundCity : void(0)}</p>
                <LocationsGrid>
                    {this.onRenderLocations()}
                </LocationsGrid>
            </Layout>
        )
    };
}
