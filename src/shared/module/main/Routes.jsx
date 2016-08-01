import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import React from 'react';
import Main from '../main/Main.jsx';
import Website from '../website/Website.jsx';
import Error404 from './components/Error404.jsx';

//New routes will be added here
const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Website}/>
        <Route path="*" component={Error404}/>
    </Route>
);

export default routes;
