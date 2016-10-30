import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/pages/Main.js';
import Website from './components/pages/Website.js';

const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Website}/>
    </Route>
);

export default routes;
