import React from 'react'
import styled from 'styled-components';

export default styled.section`
    background-color: ${props => props.backgroundColor || "#424242"};
    width: 100%;
    height: 100vh;
`;