import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'mobx-react';
import { useStrict } from 'mobx';
import createBrowserHistory from 'history/createBrowserHistory';
import {syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router'

import AppContainer from './components/App';

const browserHistory = createBrowserHistory();



ReactDOM.render(
    <Provider>
        <Router history={browserHistory}>
           <AppContainer />
        </Router>
    </Provider>,      
       document.getElementById('app')
);