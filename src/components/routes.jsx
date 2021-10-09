import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './views/landingPage';
import LocationWeatherInfos from './views/overview/locationWeatherInfos';

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/location" component={LocationWeatherInfos}/>
            </Switch>
        </BrowserRouter>
    );
}
export default AppRouter;