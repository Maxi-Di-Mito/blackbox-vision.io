import React, { PropTypes } from 'react';
import { applyRouterMiddleware, browserHistory, Router, RouterContext } from 'react-router';
import configureStore from '../module/main/store/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import useScroll from 'react-router-scroll';
import { Provider } from 'react-redux';

function hashLinkScroll() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const { hash } = window.location;

        if (hash !== '') {
            // Push onto callback queue so it runs after the DOM is updated,
            // this is required when navigating from a different page so that
            // the element is rendered on the page before trying to getElementById.
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({block: "end", behavior: "smooth"});
            }, 0);
        }
    }
}

function App(props) {
    let router;

    if (props.renderOnServer) {
        router = <RouterContext {...props.renderProps}/>
    } else {
        router = <Router history={props.history} routes={props.routes} onUpdate={hashLinkScroll} render={applyRouterMiddleware(useScroll())}/>;
    }

    return (
        <MuiThemeProvider muiTheme={getMuiTheme(props.theme)}>
            <Provider store={props.store}>
                {router}
            </Provider>
        </MuiThemeProvider>
    )
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