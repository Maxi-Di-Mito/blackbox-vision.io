import React, { Component ,PropTypes } from 'react';
import WhatWeDoSection from '../component/WhatWeDoSection.jsx';
import { connect } from 'react-redux';

const WhatWeDoSectionContainer = (props) => (
    <WhatWeDoSection {...props}/>
);

export default connect()(WhatWeDoSectionContainer);