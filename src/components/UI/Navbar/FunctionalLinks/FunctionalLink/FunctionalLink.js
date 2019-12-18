import React from 'react';

import classes from './FunctionalLink.module.css';

const functionalLink = (props) => {
    return (
        <div className={classes.item}>
            {props.children}
        </div>
    )
}

export default functionalLink;