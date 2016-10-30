import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from '../shared/routes.js';
import App from '../shared/App';

ReactDOM.render(<App routes={routes}/>, document.getElementById('app'));