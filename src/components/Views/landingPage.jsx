import React, { Component } from 'react';
import './landingPage.css'
import * as GLOBAL_CONSTANTS from '../../GlobalConstants';

export default class landingPage extends Component {   

    constructor(props) {
        super(props);       
        this.state = { 
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch(GLOBAL_CONSTANTS.WEATHER_ENDPOINT, {
                method: GLOBAL_CONSTANTS.METHODS.GET,
                headers: GLOBAL_CONSTANTS.HEADERS,
            })
            const data = await response.json();
            console.log(data)
        } catch (e) {
            console.log("Error while fetching the weather information...")
        }
    }

    render() {
        return (
            <>
            </>
        )
    };
}
