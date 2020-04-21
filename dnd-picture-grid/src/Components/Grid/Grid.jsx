import React from 'react';
import styled from 'styled-components';

export const Grid = <div className = 'grid-component'></div>;

export const GridImage = 
    <div className = 'grid-image-component' 
        style = {{backgroundImage: props => encodeURI(props.src)}}>
    </div>;

const GridItemWrapper = <div className = 'grid-item-wrapper-container'></div>;

export const GridItem = ({ forwardedRef, ...props }) => (
    <GridItemWrapper ref={forwardedRef} {...props}/>
);