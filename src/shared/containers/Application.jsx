import React, { Component ,PropTypes } from 'react';
import Content from 'react-mdl/lib/Layout/Content';
import Layout from 'react-mdl/lib/Layout/Layout';
import Grid from 'react-mdl/lib/Grid';
import Body from '../components/Body.jsx';

const Application = () => (
    <div height="600px">
        <Body title="BlackBox Vision" style={{backgroundColor: 'white', color: "black"}}/>
    </div>
);

export default Application;