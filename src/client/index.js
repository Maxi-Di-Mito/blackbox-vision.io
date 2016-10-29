import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from '../shared/components/enviroment/routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from '../shared/components/enviroment/App';

injectTapEventPlugin();

ReactDOM.render(<App routes={routes}/>, document.getElementById('app'));