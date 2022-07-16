import { Route, Switch } from 'react-router-dom';

import AboutUs from '../../Pages/about-us';
import HomeScreen from '../../Pages/home-screen';
import Nasa from '../../Pages/nasa-api/Nasa';
import React from 'react';
import UserGallery from '../../Pages/User-Gallery';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/User-Gallery'} component={UserGallery} />
            <Route exact path={'/nasa-api'} component={Nasa} />
            <Route exact path={'/about-us'} component={AboutUs} />

        </Switch>
    );
}

export default AppRouter;