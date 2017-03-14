import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';


import App from './App';
import PageNotFound from './Page_404';

import Home from './components/home/';

injectTapEventPlugin();

render((
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="*" component={PageNotFound} />
            </Route>
        </Router>
    </MuiThemeProvider>), document.getElementById('app'));