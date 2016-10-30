import React from 'react'
import styled from 'styled-components';

export default styled.div`
    background-color: ${props => props.backgroundColor? props.backgroundColor : "#424242"};
    position: ${props => props.fixed? "fixed" : "inherit"};
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: ${props => props.height || "125px"};
    text-align: center;
`;