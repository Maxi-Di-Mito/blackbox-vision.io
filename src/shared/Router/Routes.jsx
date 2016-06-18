import { Route, IndexRoute } from 'react-router';
import React from 'react';
import MainApp from '../Application.jsx';
import Error404 from '../View/Errors/404/Error404.jsx';

//New routes will be added here
const routes = (
    <Route path="/">
        <IndexRoute component={MainApp} />
        <Route path="*" component={Error404}/>
    </Route>
);

export default routes;