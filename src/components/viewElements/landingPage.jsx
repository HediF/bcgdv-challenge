import React, { Component } from 'react';
import './landingPage.css'
import * as GLOBAL_CONSTANTS from '../../GlobalConstants';
import LocationItem from './location/locationItem';
import Layout from '../containers/layout/layout';
import LocationsGrid from '../containers/grid/grid';
import { ic_search } from 'react-icons-kit/md/ic_search'
import Icon from 'react-icons-kit';

// The main dashboard containing the location cards with their respective names and temperatures
export default class landingPage extends Component {



    constructor(props) {
        super(props);
        this.state = {
            locations: [...GLOBAL_CONSTANTS.STANDARD_LOCATIONS],
            myPosition: null,
            addedCity: '',
            notFoundCity: null,
            alreadyExists: false
        }
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }

    // Initializes component state with stored locations and current position of the user
    async componentDidMount() {
        let position = await this.getPosition();
        let locations = JSON.parse(localStorage.getItem(GLOBAL_CONSTANTS.STORED_LOCATIONS)) || [...GLOBAL_CONSTANTS.STANDARD_LOCATIONS];
        if (!!position && !locations.includes(GLOBAL_CONSTANTS.MY_LOCATION)) {
            locations.unshift(GLOBAL_CONSTANTS.MY_LOCATION)
        }
        this.setState({
            locations: locations,
            myPosition: position
        })
    }

    // Method to get the coordinates of the current location of the user
    getPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    resolve(this.onSuccess(position));
                }.bind(this),
                this.onFailure,
            );
        });
    }

    // Called when the getPosition() method has been perfomed successfully
    async onSuccess(position) {
        return position;
    }

    // Called when the getPosition() method fails
    onFailure(error) {
        console.warn(`ERROR(${error.code}): ${error.message}`);
    }

    // Method to remove a city that does not exist from the localstorage and update the state accordingly in order to show the user an error message
    onCityNotFound(city) {
        let locations = JSON.parse(localStorage.getItem(GLOBAL_CONSTANTS.STORED_LOCATIONS));
        let newLocations = locations.filter((location) => {
            return location !== city;
        })
        this.setState({ locations: newLocations, notFoundCity: city });
        localStorage.setItem(GLOBAL_CONSTANTS.STORED_LOCATIONS, JSON.stringify(newLocations));
    }

    // Method to render the list of all the location items
    onRenderLocations() {
        let currentLocations = this.state.locations;
        let locationItems = currentLocations.map((location, index) => {
            return <LocationItem
                locationName={location}
                key={location + index}
                myPosition={location === GLOBAL_CONSTANTS.MY_LOCATION ? this.state.myPosition : null}
                cityNotFound={(notFoundCity) => this.onCityNotFound(notFoundCity)}
            />
        })
        return locationItems;
    }

    // Handle user input in the search bar
    handleInputChange(e) {
        let city = this.capitalizeFirstLetter(e.target.value.toLowerCase());
        this.setState({ addedCity: city });
    }

    // Adds a newly added city to the localstorage in order to fetch the city information after verifying that is does not already exist
    handleSearch() {
        let city = this.state.addedCity;
        if (!this.state.locations.includes(city) && city !== '') {
            let newLocationsList = [...this.state.locations, city];
            localStorage.setItem(GLOBAL_CONSTANTS.STORED_LOCATIONS, JSON.stringify(newLocationsList));
            this.setState({ locations: newLocationsList, addedCity: '', notFoundCity: null, alreadyExists: false });
        } else if (this.state.locations.includes(city)) {
            this.setState({ alreadyExists: true });
        }
    }

    // Method to capitalize the first letter of a string
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <Layout>
                <p className="dashboard-title">Dashboard</p>
                <div className="search-container">
                    <Icon className='search-icon' size={'100%'} icon={ic_search} />
                    <input className="add-weather-input" id="add-weather-input" placeholder="Select a new city..." value={this.state.addedCity} onChange={(e) => this.handleInputChange(e)} />
                    <button className="display-weather" onClick={() => this.handleSearch()}>Display weather</button>
                </div>
                <p className="not-found" id="not-found">{this.state.notFoundCity ? 'Could not find data for: ' + this.state.notFoundCity : void (0)}</p>
                <p className="already-exists" id="already-exists">{this.state.alreadyExists ? 'The weather information for this city are already shown' : void (0)}</p>
                <LocationsGrid>
                    {this.onRenderLocations()}
                </LocationsGrid>
            </Layout>
        )
    };
}
