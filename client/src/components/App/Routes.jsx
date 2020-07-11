import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Auth from '../Auth'
import NavBar from '../NavBar'
import Alerts from '../Alert'

const Routes = () => {
    return (
        <div>
            <NavBar />
            <Alerts />
            <Switch>
                <Route exact path='/'>
                </Route>
                <Route exact path='/signin'>
                    <Auth isSignIn signUpLink='/signup' />
                </Route>
                <Route exact path='/signup'>
                    <Auth isSignUp signInLink='/signin' />
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;
