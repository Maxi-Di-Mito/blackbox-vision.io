import React, { Component ,PropTypes } from 'react';
import WhatWeDoSection from '../component/WhatWeDoSection.jsx';
import connect from 'react-redux/lib/components/connect';

const WhatWeDoSectionContainer = (props) => (
    <WhatWeDoSection {...props}/>
);

export default connect()(WhatWeDoSectionContainer);