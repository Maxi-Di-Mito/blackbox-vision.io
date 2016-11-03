import React, { Component, PropTypes } from 'react';
import HtmlBody from '../atoms/HtmlBody';
import assetsManifest from '../../../../dist/manifest.json';
import chunkManifest from '../../../../dist/chunk-manifest.json';

const isProd = () => process.env.NODE_ENV === 'production';

class Html extends Component {
    render() {
        const { content, store, styles, title, icon } = this.props;

        return (
            <html lang='en'>
                <head>
                    <meta httpEquiv='Content-Type' content='text/html' charSet='utf-8'/>
                    <meta httpEquiv='X-UA-Compatible' content='IE=9; IE=8; IE=7; IE=EDGE'/>
                    <meta name='keywords' content='blackbox, vision, blackboxvision, blackbox-vision, material design, web, mobile, design and development'/>
                    <meta name='author' content='Alan Vaudagna, Federico Catinello, Jonatan Salas'/>
                    <meta name='description' content='Blackbox Vision is a group of enthusiastic designers and developers with remarkable skills on different modern growing technologies. Our main focus is the interaction with the client and making solutions according to their needs.'/>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>

                    <meta property='og:title' content='Blackbox Vision'/>
                    <meta property='og:type' content='Website'/>
                    <meta property='og:url' content='http://blackbox-vision.io'/>
                    <meta property='og:image' content={icon}/>

                    <title>{title}</title>

                    <link rel='shortcut icon' type='image/png' href={icon}/>
                    <link href='http://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'/>
                    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'/>
                    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900' rel='stylesheet'/>

                    <style dangerouslySetInnerHTML={{__html: styles}}/>
                </head>
                <HtmlBody>
                    <div id='app' dangerouslySetInnerHTML={{__html: content}}/>
                    <script charSet='UTF-8' dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__=${JSON.stringify(store.getState())};`}}/>
                    <script charSet='UTF-8' dangerouslySetInnerHTML={{__html: `${isProd()? `<![CDATA[window.webpackManifest=${JSON.stringify(chunkManifest)};]]>` : ''};`}}/>
                    <script charSet='UTF-8' src={`${isProd()? assetsManifest['/vendor.js'] : 'vendor.js'}`}/>
                    <script charSet='UTF-8' src={`${isProd()? assetsManifest['/app.js'] : 'app.js'}`}/>
                </HtmlBody>
            </html>
        )
    }
}

Html.propTypes = {
    content: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    styles: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

Html.defaultProps = {
    title: 'BlackBox Vision | Mobile and Web Software Factory',
    icon: 'https://assets.contentful.com/lwht5a8170mc/5kZltMAhtm6CIGWgOI8G8e/2663d2c6ef876e5ee87361ef2f66b0fa/blackbox-vision.ico'
};

export default Html;