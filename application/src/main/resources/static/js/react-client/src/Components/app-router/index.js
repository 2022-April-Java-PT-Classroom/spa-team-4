import { Route, Switch } from 'react-router-dom';

import HomeScreen from '../../Pages/home-screen';
import React from 'react';
import UserGallery from '../../Pages/User-Gallery';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/User-Gallery'} component={UserGallery} />
        </Switch>
    );
}

export default AppRouter;