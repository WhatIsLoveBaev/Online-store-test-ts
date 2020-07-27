import React from 'react';
import { Link as LinkWithStyles } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(LinkWithStyles)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export default Link 