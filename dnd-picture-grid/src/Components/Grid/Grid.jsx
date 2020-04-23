import React from 'react';

export function Grid() {
    return(<div className = 'grid-component'></div>);
}


export function GridImage() {
    return (
        <div className = 'grid-image-component' 
            style = {{backgroundImage: props => encodeURI(props.src)}}>
        </div>
    );
}


const GridItemWrapper = <div className = 'grid-item-wrapper-container'></div>;

export const GridItem = ({ forwardedRef, ...props }) => (
    <GridItemWrapper ref={forwardedRef} {...props}/>
);