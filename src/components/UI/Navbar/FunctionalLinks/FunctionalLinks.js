import React from 'react';

import classes from './FunctionalLinks.module.css';
import FunctionalLink from './FunctionalLink/FunctionalLink';

const funcitonalLinks = () => {
    return (
        <div className={classes.linksArea}>
            <FunctionalLink url='/my-list'>My list</FunctionalLink>
            <FunctionalLink url='/'>Top picks</FunctionalLink>
        </div>
    );
}

export default funcitonalLinks;