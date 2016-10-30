import React, { Component, PropTypes } from 'react';
import { applyRouterMiddleware, browserHistory, Router, RouterContext } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import useScroll from 'react-router-scroll';
import { Provider } from 'react-redux';
import hashLinkScroll from './utils/hashLinkScroll';
import configureStore from './redux/store/configureStore';

class App extends Component {
    render() {
        const { renderOnServer, renderProps, routes, history, theme, store } = this.props;
        let router;

        if (renderOnServer) {
            router = (
                <RouterContext
                    {...renderProps}
                />
            );
        } else {
            router = (
                <Router
                    history={history}
                    routes={routes}
                    onUpdate={hashLinkScroll}
                    render={applyRouterMiddleware(useScroll())}
                />
            );
        }

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
                <Provider store={store}>
                    {router}
                </Provider>
            </MuiThemeProvider>
        )
    }
}

App.props = {
    renderOnServer: PropTypes.bool,
    renderProps: PropTypes.object,
    theme: PropTypes.object,
    store: PropTypes.object,
    history: PropTypes.object,
    routes: PropTypes.object.isRequired
};

App.defaultProps = {
    renderOnServer: false,
    theme: lightBaseTheme,
    store: (typeof window !== 'undefined')? configureStore(window.__INITIAL_STATE__) : {},
    history: browserHistory,
};

export default App;