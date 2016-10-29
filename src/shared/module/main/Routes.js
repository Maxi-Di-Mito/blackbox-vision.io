import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import React from 'react';
import Main from './Main.js';
import Website from '../website/Website.js';
import Error404 from './components/Error404.js';

//New routes will be added here
const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Website}/>
        <Route path="*" component={Error404}/>
    </Route>
);

export default routes;
