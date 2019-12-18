import React from 'react';

import classes from './FunctionalLinks.module.css';
import FunctionalLink from './FunctionalLink/FunctionalLink';

const funcitonalLinks = () => {
    return (
        <div className={classes.linksArea}>
            <FunctionalLink>Browse</FunctionalLink>
            <FunctionalLink>My list</FunctionalLink>
            <FunctionalLink>Top picks</FunctionalLink>
            <FunctionalLink>Recent</FunctionalLink>
        </div>
    );
}

export default funcitonalLinks;