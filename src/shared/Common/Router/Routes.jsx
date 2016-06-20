import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import React from 'react';
import MainApp from '../../Application.jsx';
import Error404 from '../Errors/Error404.jsx';

//New routes will be added here
const routes = (
    <Route path="/">
        <IndexRoute component={MainApp} />
        <Route path="*" component={Error404}/>
    </Route>
);

export default routes;
