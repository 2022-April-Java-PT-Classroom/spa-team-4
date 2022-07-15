import { Route, Switch } from 'react-router-dom';

import App from '../../Pages/nasa-api/Nasa';
import HomeScreen from '../../Pages/home-screen';
import React from 'react';
import UserGallery from '../../Pages/User-Gallery';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/User-Gallery'} component={UserGallery} />
            <Route exact path={'/nasa-api'} component={App} />
        </Switch>
    );
}

export default AppRouter;