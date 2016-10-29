import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../pages/Main.js';
import Website from '../pages/Website.js';

const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Website}/>
    </Route>
);

export default routes;
