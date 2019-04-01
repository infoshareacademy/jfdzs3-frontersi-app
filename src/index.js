import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import LostForm from'./Pages/LostForm/lostForm';
import FindForm from'./Pages/FindForm/findForm';
import LostDetail from'./Pages/LostDetail/lostDetail';
import FindDetail from'./Pages/FindDetail/findDetail';
import Dashboard from './Pages/Dashboard//dashboard';
import Favourite from './Pages/Favourite/favourite';
import Layout from './Layout/layout';
ReactDOM.render(
    <BrowserRouter>
    <Layout>
        <Switch>
        <Route exact path='/' component={App} />
        <Route path='/LostForm' component={LostForm} />
        <Route path='/FindForm' component={FindForm} />
        <Route path='/LostDetail' component={LostDetail} />
        <Route path='/FindDetail' component={FindDetail} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/Favourite' component={Favourite} />
        </Switch>
    </Layout>
</BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
