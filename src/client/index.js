import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from '../shared/module/main/Routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from '../shared/module/App';

injectTapEventPlugin();

ReactDOM.render(<App routes={routes}/>, document.getElementById('app'));

//import { install } from 'offline-plugin/runtime';
//install();