import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        </BrowserRouter>
    );
};

export default hot(module)(App);
