import React from 'react'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import store from '../../store'
import Auth from '../Auth'
import NavBar from '../NavBar'
import Alerts from '../Alerts'

const App = () => (
    <Provider store={store}>
        <Router>
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
        </Router>
    </Provider>
)

export default App