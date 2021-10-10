import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './viewElements/landingPage';
import LocationWeatherInfos from './viewElements/overview/locationWeatherInfos';

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/location/:locationName" component={LocationWeatherInfos}/>
            </Switch>
        </BrowserRouter>
    );
}
export default AppRouter;